import {FC, useState} from 'react'
import {KTSVG, isNotEmpty} from '../../../helpers'
import {useIntl} from 'react-intl'
import {ResponseTeam, Team} from './core/_models'
import * as Yup from 'yup'
import {MuiAutoComplete} from './components/MuiAutoComplete'
import {useListView} from './core/ListViewProvider'
import {useQueryResponse} from './core/QueryResponseProvider'
import {useFormik} from 'formik'
import {createTeam, updateTeam} from './core/_requests'
import clsx from 'clsx'
import {TeamsListLoading} from './loading/TeamsListLoading'
import {useMutation, useQueryClient} from 'react-query'
import Swal from 'sweetalert2'
import { getUsers } from '../user-create-modal-stepper/core/_requests'
import { User } from '../user-create-modal-stepper/core/_models'

type Props = {
  isTeamLoading: boolean
  team: ResponseTeam
  handleClose: () => void | undefined
}
const TeamModalContent: FC<Props> = ({team, isTeamLoading, handleClose}) => {
  const intl = useIntl()
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const queryClient = useQueryClient()
  const [data, setData] = useState<Team>(team.teams)

  const editTeamSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '2'}))
      .max(50, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MAX_LENGTH'}, {max: '50'}))
      .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    leader_id: Yup.string()
      .min(1, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '1'}))
      .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
  })

  const updateData = (fieldsToUpdate: Partial<Team>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const cancel = (withRefresh?: boolean) => {
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const formik = useFormik({
    initialValues: data,
    validationSchema: editTeamSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(data.id)) {
                  await updateTeam(data).then((response)=>{
                    const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
                    let theme = ''
                    if (CurrentTheme === 'dark') {
                      theme = '#353b48'
                    } else {
                      theme = '#fff'
                    }
                    // console.log(theme)
                    Swal.fire({
                      icon: 'success',
                      title: 'Atualizado!',
                      html: "<h5>"+response?.message+"</h5>",
                      background: theme,
                      confirmButtonColor: '#009ef7',
                      color: '#fff',
                    })
                    handleClose()
                    queryClient.invalidateQueries()
                  
                  })
                } else {
                  // debugger;
                  await createTeam(data).then((response) => {
                    const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
                    let theme = ''
                    if (CurrentTheme === 'dark') {
                      theme = '#353b48'
                    } else {
                      theme = '#fff'
                    }
                    // console.log(theme)
                    Swal.fire({
                      icon: 'success',
                      title: 'Criado!',
                      html: '<h5>' + response?.message + '</h5>',
                      background: theme,
                      confirmButtonColor: '#009ef7',
                      color: '#fff',
                    })
                    handleClose()
                    queryClient.invalidateQueries()
                  })
                }
              } catch (ex) {
                console.error(ex)
              } finally {
                setSubmitting(true)
                cancel(true)
              }
    },
  })
  // const submit = async () => {
  //   // debugger;
  //   setSubmitting(true)
  //     try {
  //       if (isNotEmpty(data.id)) {
  //         await updateTeam(data).then((response)=>{
  //           const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
  //           let theme = ''
  //           if (CurrentTheme === 'dark') {
  //             theme = '#353b48'
  //           } else {
  //             theme = '#fff'
  //           }
  //           // console.log(theme)
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Atualizado!',
  //             html: "<h5>"+response?.message+"</h5>",
  //             background: theme,
  //             confirmButtonColor: '#009ef7',
  //             color: '#fff',
  //           })
  //           handleClose()
  //           queryClient.invalidateQueries()
          
  //         })
  //       } else {
  //         // debugger;
  //         await createTeam(data).then((response) => {
  //           const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
  //           let theme = ''
  //           if (CurrentTheme === 'dark') {
  //             theme = '#353b48'
  //           } else {
  //             theme = '#fff'
  //           }
  //           // console.log(theme)
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Criado!',
  //             html: '<h5>' + response?.message + '</h5>',
  //             background: theme,
  //             confirmButtonColor: '#009ef7',
  //             color: '#fff',
  //           })
  //           handleClose()
  //           queryClient.invalidateQueries()
  //         })
  //       }
  //     } catch (ex) {
  //       console.error(ex)
  //     } finally {
  //       setSubmitting(true)
  //       cancel(true)
  //     }
  //   }
  // console.log(data);
  const [loading, setLoading] = useState<Boolean>(false)
  const [dataUser, setDataUser] = useState<User[]>([])

  const getSelectUsers = useMutation(() => getUsers(), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
      // debugger;
      setLoading(false)
      setDataUser(response.data)
    },
  })

  const selectUser = async () => {
    if(dataUser.length === 0){
    setLoading(true)
    await getSelectUsers.mutateAsync()
    }
    
  }
// console.log(data.leader)
  return (
    <div className='modal-content'>
      <div className='modal-header'>
        <div className='col-md-12 d-flex justify-content-between align-items-center'>
          <h2>{intl.formatMessage({id: 'MODAL.TITLE.TEAM'})}</h2>
          <button
            className='btn btn-sm btn-icon btn-active-color-primary h-auto'
            onClick={handleClose}
          >
            <KTSVG
              className='svg-icon-2x svg-icon-gray-800'
              path='/media/icons/duotune/arrows/arr061.svg'
            />
          </button>
        </div>
      </div>
      <div className='modal-body'>
 
        <form
          id='kt_modal_add_team_form'
          className='form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          {/* begin::Scroll */}
          <div
            className='d-flex flex-column scroll-y me-n7 pe-7'
            id='kt_modal_add_team_scroll'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-max-height='auto'
            data-kt-scroll-dependencies='#kt_modal_add_team_header'
            data-kt-scroll-wrappers='#kt_modal_add_team_scroll'
            data-kt-scroll-offset='300px'
          >
            {/* {data} */}
            <div className='mb-3'>
              <label className='required fw-bold fs-6 mb-2'>
                {intl.formatMessage({id: 'FORM.INPUT.NAME.NAME'})}
              </label>

              <input
                placeholder={intl.formatMessage({id: 'FORM.INPUT.NAME.NAME'})}
                {...formik.getFieldProps('name')}
                type='text'
                name='name'
                value={data.name}
                onChange={(e: any) => {
                  // console.log(data)
                  formik.setFieldValue('name', e.target.value)
                  updateData({
                    name: e.target.value,
                    creator_id: 2,
                  })
                }}
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.name && formik.errors.name},
                  {
                    'is-valid': formik.touched.name && !formik.errors.name,
                  }
                )}
                autoComplete='off'
                disabled={formik.isSubmitting || isTeamLoading}
              />
              {formik.touched.name && formik.errors.name && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.name}</span>
                  </div>
                </div>
              )}
            </div>

            <div className='mb-3'>
              <label className='required fw-bold fs-6 mb-2'>
                {intl.formatMessage({id: 'FORM.INPUT.NAME.LEADER'})}
              </label>
              <select
                {...formik.getFieldProps('leader')}
                disabled={formik.isSubmitting || isTeamLoading}
                value={data.leader}
                onClick={selectUser}
                onChange={(e: any) => {
                  // console.log(e.target.label)
                  formik.setFieldValue('leader_id', e.target.value)
                  updateData({
                    leader_id: e.target.value,
                    leader: e.target.label,
                    // user_id: [e.target.value]
                  })
                }}
                className={clsx(
                  'form-control form-control-solid mb-3 mb-lg-0',
                  {'is-invalid': formik.touched.leader && formik.errors.leader},
                  {
                    'is-valid': formik.touched.leader && !formik.errors.leader,
                  }
                )}
              >
                {!loading && (<option>{data.leader}</option>)}
                {loading ? <option>Carregando Usuários</option>: ''}
                {dataUser?.map((rs) => {
                    // debugger
                    return (
                      <>
                        <option value={rs.id}>{rs.name}</option>
                      </>
                    )
                  })}
              </select>
              {formik.touched.leader && formik.errors.leader && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.leader}</span>
                  </div>
                </div>
              )}
            </div>

            <div className='mb-3'>
              <MuiAutoComplete updateData={updateData} team={data} />
            </div>
          </div>

          <div className='text-center pt-5'>
            <button
              type='reset'
              onClick={handleClose}
              className='btn btn-light me-3'
              data-kt-teams-modal-action='cancel'
              disabled={formik.isSubmitting || isTeamLoading}
            >
              {intl.formatMessage({id: 'FORM.GENERAL.CANCEL_BUTTON'})}
            </button>

            {/* <Link to='/teams/teams-list'> */}
            <button
              type='submit'
              className='btn btn-primary'
              data-kt-teams-modal-action='submit'
              disabled={isTeamLoading || formik.isSubmitting || !formik.isValid || !formik.touched}
            >
              <span className='indicator-label'>
                {intl.formatMessage({id: 'FORM.GENERAL.SAVE_BUTTON'})}
              </span>

              {(formik.isSubmitting || isTeamLoading) && (
                <span className='indicator-progress'>
                  {intl.formatMessage({id: 'GENERAL.LOADING'})}{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
            {/* </Link> */}
          </div>
          {/* end::Actions */}
        </form>
      {(formik.isSubmitting || isTeamLoading) && <TeamsListLoading />}
      </div>
    </div>
  )
}

export {TeamModalContent}
