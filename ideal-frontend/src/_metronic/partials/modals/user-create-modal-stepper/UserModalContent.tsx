import { FC, useCallback, useEffect, useState } from 'react'
import { ID, KTSVG, isNotEmpty, toAbsoluteUrl } from '../../../helpers'
import { useIntl } from 'react-intl'
import { ResponseUser, User } from './core/_models'
import { StepperComponent } from '../../../assets/ts/components'
import * as Yup from 'yup'
import { useQueryResponse } from './core/QueryResponseProvider'
import { useMutation, useQueryClient } from 'react-query'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { createUser, getEmailValid, updateUser } from './core/_requests'
import Swal from 'sweetalert2'
import { UsersListLoading } from './loading/UsersListLoading'
import { Formik, useFormik } from 'formik'
import { useAuth } from '../../../../app/modules/auth'
import { useListView } from './core/ListViewProvider'
import clsx from 'clsx'

type Formik = {
  userId: ID
  user: ResponseUser
  isUserLoading: boolean
  handleClose: () => void | undefined
}
export const UserModalContent: FC<Formik> = ({ handleClose, userId, user, isUserLoading }) => {
  // debugger;
  const intl = useIntl()
  const { setItemIdForUpdate } = useListView()
  const { refetch } = useQueryResponse()

  const [data, setData] = useState<User>(user.users)
  const createAccountSchemas = [
    Yup.object().shape({
      name: Yup.string()
        .min(3, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '3'}))
        .max(50, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MAX_LENGTH'}, {max: '50'}))
        .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
      email: Yup.string()
        .email(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.EMAIL'}))
        .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    }),
    Yup.object({
      password: Yup.string()
        .min(8, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '8'}))
        .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
      cost_hour: Yup.string()
        .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    }),
    Yup.object({
      shift_time: Yup.number()
        .min(1, intl.formatMessage({id: 'FORM.INPUT.VALIDATION.MIN_LENGTH'}, {min: '1'}))
        .required(intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})),
    }),
  ]

  const updateData = (fieldsToUpdate: Partial<User>) => {
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
    initialValues: user.users,
    validationSchema: createAccountSchemas,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true)
      try {
        if (isNotEmpty(values.id)) {
          await updateUser(values)
        } else {
          await createUser(values)
        }
      } catch (ex) {
        console.error(ex)
      } finally {
        setSubmitting(true)
        cancel(true)
      }
    },
  })
  const [logo, setLogo] = useState(data.avatar)
  // const [profileImage, setProfileImage] = useState("teste");
  // debugger;

  const handleCreateBase64 = useCallback(
    async (e: any) => {
      // debugger
      const file = e.target.files[0]

      const base64: any = await convertToBase64(file)
      setLogo(base64)

      updateData({
        avatar: e.target.files[0],
      })
      // createUser(data)
    },
    [updateData]
  )
  // console.log(data)

  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      if (!file) {
        alert('Please select an image')
      } else {
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          resolve(fileReader.result)
        }
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const deleteImage = (e: any) => {
    e.preventDefault()
    updateData({
      avatar: 'null',
    })
    setLogo('')
  }

  const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
console.log(formik.values)
  return (
    <>
      <div className='modal-header'>
        <h2>{intl.formatMessage({id: 'MODAL.TITLE.USER'})}</h2>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>
      <div className='modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15'>
        <form
          id='kt_modal_edit_user_form'
          className='form'
          onSubmit={formik.handleSubmit}
          noValidate
        >
          <div className='fv-row mb-4 text-center'>
          <div
            className='image-input image-input-empty image-input-outline image-input-placeholder mb-3'
            data-kt-image-input='true'
          >
            {CurrentTheme === 'dark' ? (
              <img
                className='image-input-wrapper w-150px h-150px'
                src={
                  isNotEmpty(logo) && logo !== 'null'
                    ? logo
                    : toAbsoluteUrl('/media/svg/files/blank-image-dark.svg')
                }
                alt='test'
              />
            ) : (
              <img
                className='image-input-wrapper w-150px h-150px'
                src={
                  isNotEmpty(logo) && logo !== 'null'
                    ? logo
                    : toAbsoluteUrl('/media/svg/files/blank-image.svg')
                }
                alt='test'
              />
            )}
            {/* {logo ? "" : <img className='image-input-wrapper w-150px h-150px'
              src={logo}
              alt="test"
            />} */}
            <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='change'
            >
              <i className='bi bi-pencil-fill fs-7'></i>
              <input
                type='file'
                name='avatar'
                id='avatar'
                accept='.png, .jpg, .jpeg'
                onChange={handleCreateBase64}
              />
              <input type='hidden' name='avatar_remove' />
            </label>
            <label
              className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
              data-kt-image-input-action='cancel'
              data-bs-toggle='tooltip'
              aria-label='Cancel avatar'
              data-bs-original-title='Cancel avatar'
              data-kt-initialized='1'
            >
              <button
                className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                onClick={deleteImage}
              >
                <i className='bi bi-x fs-2'></i>
              </button>
            </label>
          </div>
          <div className='fs-8 pb-5'>
            Defina a imagem em miniatura do post. Somente arquivos de imagem *.png, *.jpg e *.jpeg
            são aceitos
          </div>
          </div>
          <div className='fv-row mb-4'>
          <label htmlFor='name' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>
              {intl.formatMessage({id: 'FORM.INPUT.NAME.USER_NAME'})}
            </span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.USER_NAME'})}
            ></i>
          </label>
          <input
            type='text'
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {'is-invalid': !formik.touched.name && formik.errors.name},
              {
                'is-valid': data.name && !formik.errors.name,
              }
            )}
            name='name'
            id='name'
            placeholder=''
            autoComplete='off'
            value={data.name ?? ''}
            onChange={(e: any) => {
              formik.setFieldValue('name', e.target.value)
              updateData({
                name: e.target.value,
              })
            }}
          />
          {!formik.touched.name && data.name && formik.errors.name && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.name}</span>
              </div>
            </div>
          )}
          {!data.name && (
            <div className='fv-plugins-message-container'>
              <div data-field='shift_time' data-validator='notEmpty' className='fv-help-block'>
                {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
              </div>
            </div>
          )}
        </div>
          {/*  */}
          <div className='text-center pt-5'>
            <button type='reset' className='btn btn-light me-5 py-2' data-kt-user-modal-action='cancel' onClick={() =>cancel} >
              {intl.formatMessage({ id: 'FORM.GENERAL.CANCEL_BUTTON' })}
            </button>

            <button
              type='submit'
              className='btn btn-primary py-2'
              data-kt-projects-modal-action='submit'
              disabled={
                isUserLoading || formik.isSubmitting || !formik.isValid || !formik.touched
              }
            >
              <span className='indicator-label'>
                {intl.formatMessage({ id: 'FORM.GENERAL.SAVE_BUTTON' })}
              </span>
              {(formik.isSubmitting || isUserLoading) && (
                <span className='indicator-progress'>
                  {intl.formatMessage({ id: 'GENERAL.LOADING' })}{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
      {(formik.isSubmitting || isUserLoading) && <UsersListLoading />}
    </>

  )
}
