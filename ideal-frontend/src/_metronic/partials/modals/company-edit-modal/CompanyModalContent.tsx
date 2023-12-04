import {FC, useState} from 'react'
import {KTSVG, isNotEmpty} from '../../../helpers'
import {useIntl} from 'react-intl'
import * as Yup from 'yup'
import {Company, ResponseCompany} from './core/_models'
import {useFormik} from 'formik'
import {useQueryResponse} from './core/QueryResponseProvider'
import {useListView} from './core/ListViewProvider'
import {useMutation, useQueryClient} from 'react-query'
import Swal from 'sweetalert2'
import {createCompany, getEmailValid, updateCompany} from './core/_requests'
import clsx from 'clsx'
import { mask } from 'remask'
import { CompanyListLoading } from './loading/CompanyListLoading'

type Props = {
  isCompanyLoading: boolean
  company: ResponseCompany
  handleClose: () => void | undefined
}
const CompanyModalContent: FC<Props> = ({handleClose, company, isCompanyLoading}) => {
  const intl = useIntl()
  const {setItemIdForUpdate} = useListView()
  const {refetch} = useQueryResponse()
  const [data, setData] = useState<Company>(company.companys)
  const queryClient = useQueryClient()
  // debugger;
  const editClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '3'}))
      .max(50, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MAX_LENGTH'}, {max: '50'}))
      .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    email: Yup.string()
      .email(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.EMAIL'}))
      .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    phone: Yup.string()
      .min(14, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '14'}))
      .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
  })

  const updateData = (fieldsToUpdate: Partial<Company>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const cancel = (withRefresh?: boolean) => {
    // debugger;
    if (withRefresh) {
      refetch()
    }
    setItemIdForUpdate(undefined)
  }

  const update = useMutation(() => updateCompany(data), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
      const TemaAtual = window.localStorage.getItem('kt_theme_mode_value') || ''
      let tema = ''
      if (TemaAtual === 'dark') {
        tema = '#353b48'
      } else {
        tema = '#fff'
      }
      // console.log(tema)
      Swal.fire({
        icon: 'success',
        title: 'Atualizado!',
        html: '<h5> Cliente atualizado com sucesso</h5>',
        background: tema,
        confirmButtonColor: '#009ef7',
      })
      queryClient.invalidateQueries()
      cancel(true)
      handleClose()
    },
    onError: (error) => {
      Swal.fire({
        icon: 'warning',
        text: 'Cliente não atualizado!',
      })
    },
  })

  const create = useMutation(() => createCompany(data), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
      const TemaAtual = window.localStorage.getItem('kt_theme_mode_value') || ''
      let tema = ''
      if (TemaAtual === 'dark') {
        tema = '#353b48'
      } else {
        tema = '#fff'
      }
      // console.log(tema)
      Swal.fire({
        icon: 'success',
        title: 'Criado!',
        html: '<h5> Cliente Criado com sucesso</h5>',
        background: tema,
        confirmButtonColor: '#009ef7',
      })
      cancel(true)
      queryClient.invalidateQueries()
      handleClose()
    },
    onError: (error) => {
      Swal.fire({
        icon: 'warning',
        text: 'Cliente não criado!',
      })
    },
  })

  const emailValid = useMutation(() =>
    getEmailValid(data).then((response) => {
      // debugger;
      if (response.errors === true) {
        Swal.fire({
          icon: 'warning',
          html: "<h5 style='color:black'>" + response?.message + '</h5>',
        })
        return false
      } else {
        return true
      }
    })
  )

  const formik = useFormik({
    initialValues: data,
    validationSchema: editClientSchema,
    onSubmit: async (values, {setSubmitting}) => {
      setSubmitting(true)
      // console.log(values)
      try {
        if (isNotEmpty(values.id)) {
          return update.mutateAsync()
        } else {
          if (await emailValid.mutateAsync()) {
            return create.mutateAsync()
          }
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })

  return (
    <>
      <div className='modal-header pb-0 border-0 justify-content-end'>
      <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
      </div>
      <div className='modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15'>
        <div className='text-center mb-5'>
          <h1 className='mb-3'>{intl.formatMessage({id: 'MODAL.TITLE.COMPANY'})}</h1>
        </div>
        <form
          id='kt_modal_edit_company_form'
          className='form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div
            className='d-flex flex-column scroll-y me-n7'>
            {/* begin::Input group */}
            <div className='mb-4'>
              {/* begin::Label */}
              <label className='required fw-bold fs-6 mb-2'>
                {intl.formatMessage({id: 'FORM.INPUT.NAME.NAME_COMPANY'})}
              </label>
              {/* end::Label */}

              {/* begin::Input */}
              <input
                {...formik.getFieldProps('name')}
                placeholder={intl.formatMessage({id: 'FORM.INPUT.NAME.NAME'})}
                type='text'
                value={data.name}
                name='name'
                onChange={(e: any) => {
                  formik.setFieldValue('name', e.target.value)
                  updateData({
                    name: e.target.value,
                  })
                }}
                className={clsx(
                  'form-control form-control-solid py-2 rounded fw-normal',
                  {'is-invalid': formik.touched.name && formik.errors.name},
                  {
                    'is-valid': formik.touched.name && !formik.errors.name,
                  }
                )}
                disabled={formik.isSubmitting || isCompanyLoading}
                autoComplete='off'
              />
            </div>
            {/* end::Input group */}

            {/* begin::Input group */}
            <div className='mb-4'>
              {/* begin::Label */}
              <label className='required fw-bold fs-6 mb-2'>
                {intl.formatMessage({id: 'FORM.INPUT.NAME.RESPONSIBLE'})}
              </label>
              <input
              readOnly
                placeholder='João Silva'
                type='text'
                value={data.responsible ?? ''}
                name='responsible'
                onChange={(e: any) =>
                  updateData({
                    responsible: e.target.value,
                  })
                }
                className={clsx(
                  'form-control form-control-solid py-2  rounded fw-normal',
                  {'is-invalid': formik.touched.responsible && formik.errors.responsible},
                  {
                    'is-valid': formik.touched.responsible && !formik.errors.responsible,
                  }
                )}
                autoComplete='off'
                disabled={formik.isSubmitting || isCompanyLoading}
              />
              {formik.touched.responsible && formik.errors.responsible && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.responsible}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Input group */}
            {/* begin::Input group */}
            <div className='mb-4'>
              <label className='required fw-bold'>
                {intl.formatMessage({id: 'FORM.INPUT.NAME.EMAIL'})}
              </label>

              <input
                {...formik.getFieldProps('email')}
                placeholder='meucliente@gmail.com'
                type='email'
                value={data.email ?? ''}
                name='email'
                onChange={(e: any) => {
                  formik.setFieldValue('email', e.target.value)
                  updateData({
                    email: e.target.value,
                  })
                }}
                className={clsx(
                  'form-control form-control-solid py-2  rounded fw-normal',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                autoComplete='off'
                disabled={formik.isSubmitting || isCompanyLoading}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Input group */}

            <div className='mb-4'>
                    <label className='required fw-bold'>
                      {intl.formatMessage({id: 'FORM.INPUT.NAME.PHONE'})}
                    </label>

                    <input
                      {...formik.getFieldProps('phone')}
                      placeholder='(31) 91234-5678'
                      type='text'
                      name='phone'
                      onChange={(e: any) => {
                        formik.setFieldValue('phone', e.target.value)
                        updateData({
                          phone: mask(e.target.value, ['99 9 9999-9999']),
                        })
                      }}
                      value={data.phone ?? ''}
                      className={clsx(
                        'form-control form-control-solid py-2  rounded fw-normal',
                        {'is-invalid': formik.touched.phone && formik.errors.phone},
                        {
                          'is-valid': formik.touched.phone && !formik.errors.phone,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isCompanyLoading}
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.phone}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className='mb-7'>
                    <label className='fw-bold'>
                      {intl.formatMessage({id: 'FORM.INPUT.NAME.COMMENTS'})}
                    </label>

                    <input
                      placeholder='Obs...'
                      type='text'
                      value={data.observation ?? ''}
                      name='observation'
                      onChange={(e: any) =>
                        updateData({
                          observation: e.target.value,
                        })
                      }
                      className={clsx(
                        'form-control form-control-solid py-2  rounded fw-normal',
                        {'is-invalid': formik.touched.observation && formik.errors.observation},
                        {
                          'is-valid': formik.touched.observation && !formik.errors.observation,
                        }
                      )}
                      autoComplete='off'
                      disabled={formik.isSubmitting || isCompanyLoading}
                    />
                    {formik.touched.observation && formik.errors.observation && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{formik.errors.observation}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <div className='mb-4'>
                      <div className='form-check form-switch form-check-custom form-check-solid me-10'>
                        <input
                          type='checkbox'
                          name='active'
                          id='isActive'
                          checked={data.active}
                          onChange={(e: any) => {
                            // console.log(e.target.checked)
                            updateData({
                              active: e.target.checked,
                            })
                          }}
                          className={clsx('form-check-input h-25px w-40px')}
                          autoComplete='off'
                          disabled={formik.isSubmitting || isCompanyLoading}
                        />
                        {formik.touched.active && formik.errors.active && (
                          <div className='fv-plugins-message-container'>
                            <div className='fv-help-block'>
                              <span role='alert'>{formik.errors.active}</span>
                            </div>
                          </div>
                        )}

                        <label className='form-check-label' htmlFor='isActive'>
                          {intl.formatMessage({id: 'FORM.INPUT.NAME.IS_COMPANY_ACTIVE'})}
                        </label>
                      </div>
                    </div> */}
          </div>
          {/* end::Scroll */}

          {/* begin::Actions */}
          <div className='text-center pt-5'>
            <button type='reset' className='btn btn-light me-5 py-2' data-kt-company-modal-action='cancel'>
              {intl.formatMessage({id: 'FORM.GENERAL.CANCEL_BUTTON'})}
            </button>

            <button
                type='submit'
                className='btn btn-primary py-2'
                data-kt-projects-modal-action='submit'
                disabled={
                  isCompanyLoading || formik.isSubmitting || !formik.isValid || !formik.touched
                }
              >
                <span className='indicator-label'>
                  {intl.formatMessage({id: 'FORM.GENERAL.SAVE_BUTTON'})}
                </span>
                {(formik.isSubmitting || isCompanyLoading) && (
                  <span className='indicator-progress'>
                    {intl.formatMessage({id: 'GENERAL.LOADING'})}{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
          </div>
        </form>
        {(formik.isSubmitting || isCompanyLoading) && <CompanyListLoading />}
      </div>
    </>
  )
}

export {CompanyModalContent}
