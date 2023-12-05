/* eslint-disable jsx-a11y/anchor-is-valid */
import { useIntl } from 'react-intl'
import clsx from 'clsx'
import { StepProps } from '../core/_models'
import { mask } from 'remask'
import { InputCurrency } from '../../../../helpers'
import { useAuth } from '../../../../../app/modules/auth'
import { useMutation } from 'react-query'
import { useEffect, useState } from 'react'
import { Type } from '../../type-edit-modal/core/_models'
import { getType } from '../../type-edit-modal/core/_requests'

const Step2 = ({ data, updateData, hasError, props }: StepProps) => {
  const intl = useIntl()
  const { currentUser } = useAuth()
  const [types, setTypes] = useState<Type[]>([])
  const getSelectClients = useMutation(() => getType(), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
      // debugger;

      setTypes(response.data)
    },
  })

  useEffect(() => {
    getSelectClients.mutateAsync()
  }, [])
  // console.log(data)
  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        <div className='row justify-content-between'>
          <div className='col-md-6'>
            <div className='fv-row mb-3'>
              <label htmlFor='phone' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                {intl.formatMessage({ id: 'FORM.INPUT.NAME.PHONE' })}
              </label>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='phone'
                id='phone'
                value={data.phone ?? ''}
                onChange={(e: any) =>
                  updateData({
                    phone: mask(e.target.value, ['99 9 9999-9999']),
                    job_role: data.job_role,
                    password: data.password,
                  })
                }
              />
            </div>

            <div className='fv-row mb-3'>
              <label htmlFor='job_role' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                {intl.formatMessage({ id: 'FORM.INPUT.NAME.JOB_ROLE' })}
              </label>
              <select
                className='form-select form-select-solid'
                data-kt-select2='true'
                data-placeholder='Select option'
                data-allow-clear='true'
                name='project-client'
                id='project-client'
                placeholder=''
                autoComplete='off'
                value={data.types}
                onChange={(e: any) => {
                  updateData({
                    types: e.target.value
                  })
                }}
              >
                <option value="">{intl.formatMessage({ id: 'FORM.INPUT.TOOLTIP.CLIENT' })}</option>
                {types.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}

              </select>
            </div>


          </div>

          <div className='col-md-6'>
            <div className='fv-row mb-3'>
              <label htmlFor='birthday' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                {intl.formatMessage({ id: 'FORM.INPUT.NAME.BIRTHDAY' })}
              </label>
              <input
                type='date'
                className='form-control form-control-lg form-control-solid'
                name='birthday'
                id='birthday'
                value={data.birthday ?? ''}
                onChange={(e) =>
                  updateData({
                    in_company_since: data.in_company_since,
                    birthday: e.target.value,
                  })
                }
              />
            </div>
            <div className='fv-row mb-3'>
              <label htmlFor='password' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>
                  {intl.formatMessage({ id: 'FORM.INPUT.NAME.PASSWORD' })}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({ id: 'FORM.INPUT.TOOLTIP.PASSWORD' })}
                ></i>
              </label>
              <input
                type='password'
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  { 'is-invalid': !props.touched.password && props.errors.password },
                  {
                    'is-valid': data.password && !props.errors.password,
                  }
                )}
                name='password'
                id='password'
                placeholder=''
                value={data.password ?? ''}
                onChange={(e: any) => {
                  props.setFieldValue('password', e.target.value)
                  updateData({
                    phone: data.phone,
                    job_role: data.job_role,
                    password: e.target.value,
                  })
                }
                }
              />
              {!props.touched.password && data.password && props.errors.password && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{props.errors.password}</span>
                  </div>
                </div>
              )}
              {!data.password && hasError && (
                <div className='fv-plugins-message-container'>
                  <div data-field='shift_time' data-validator='notEmpty' className='fv-help-block'>
                    {intl.formatMessage({ id: 'FORM.INPUT.VALIDATION.REQUIRED' })}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Step2 }
