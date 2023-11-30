import { useIntl } from 'react-intl'
import { useCallback, useEffect, useState } from 'react'
import { StepProps, User } from '../core/_models'
import clsx from 'clsx'
import { createUser } from '../core/_requests'
import { url } from 'inspector'
import { isNotEmpty, toAbsoluteUrl } from '../../../../../_metronic/helpers'

const Step1 = ({ data, updateData, hasError, props }: StepProps) => {
  const intl = useIntl()
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
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
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
      </div>
    </div>

  )
}

export { Step1 }
