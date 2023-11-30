import { useIntl } from 'react-intl'
import clsx from 'clsx'
import { StepProps } from '../core/_models'
// import { InputCurrency } from '../../../../../_metronic/helpers'
import { useAuth } from '../../../auth'
const Step2 = ({ data, updateData, hasError, props }: StepProps) => {
  const intl = useIntl()
  const { currentUser } = useAuth()
  // console.log(props)
  // console.log(data.cost_hour)
  return (
    <div className='pb-5 mt-20' data-kt-stepper-element='content'>
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
                    // phone: mask(e.target.value, ['99 9 9999-9999']),
                    job_role: data.job_role,
                    password: data.password,
                  })
                }
              />
            </div>
            <div className='fv-row mb-3'>
            <label htmlFor="project-client" className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>{intl.formatMessage({id: 'FORM.INPUT.NAME.TYPE_USER'})}</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.TYPE_USER'})}
            ></i>
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
            value={data.id }
            onChange={(e: any) => {
              updateData({
                id: e.target.value
              })
            }}
          >
            <option value="">{intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.TYPE_USER'})}</option>
            {/* {data.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}            */}
            
          </select>
          {!data.id && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='project-client' data-validator='notEmpty' className='fv-help-block'>
                {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
              </div>
            </div>
          )}
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

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='2-10'
              id='kt_account_team_size_select_2'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_2'
            >
              <span className='fw-bolder fs-3'>2-10</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='10-50'
              id='kt_account_team_size_select_3'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_3'
            >
              <span className='fw-bolder fs-3'>10-50</span>
            </label>
          </div>

          <div className='col'>
            <Field
              type='radio'
              className='btn-check'
              name='accountTeamSize'
              value='50+'
              id='kt_account_team_size_select_4'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4'
              htmlFor='kt_account_team_size_select_4'
            >
              <span className='fw-bolder fs-3'>50+</span>
            </label>
          </div>
        </div>

        <div className='form-text'>
          Customers will see this shortened version of your statement descriptor
        </div>
      </div>

      <div className='mb-10 fv-row'>
        <label className='form-label mb-3'>Team Account Name</label>

        <Field
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='accountName'
        />
        <div className='text-danger mt-2'>
          <ErrorMessage name='accountName' />
        </div>
      </div>

      <div className='mb-0 fv-row'>
        <label className='d-flex align-items-center form-label mb-5'>
          Select Account Plan
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Monthly billing will be based on your account plan'
          ></i>
        </label>

        <div className='mb-0'>
          <label className='d-flex flex-stack mb-5 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/finance/fin001.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Company Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>
                  Use images to enhance your post flow
                </span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='1' />
            </span>
          </label>

          <label className='d-flex flex-stack mb-5 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/graphs/gra006.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Developer Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>Use images to your post time</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='2' />
            </span>
          </label>

          <label className='d-flex flex-stack mb-0 cursor-pointer'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label'>
                  <KTSVG
                    path='/media/icons/duotune/graphs/gra008.svg'
                    className='svg-icon-1 svg-icon-gray-600'
                  />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder text-gray-800 text-hover-primary fs-5'>
                  Testing Account
                </span>
                <span className='fs-6 fw-bold text-gray-400'>
                  Use images to enhance time travel rivers
                </span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <Field className='form-check-input' type='radio' name='accountPlan' value='3' />
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}
export { Step2 }