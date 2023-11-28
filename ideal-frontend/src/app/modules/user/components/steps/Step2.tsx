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
          <div className='col-md-6'>
            {currentUser?.type_id === 1 ? (
              <div className='fv-row mb-3'>
                <label
                  htmlFor='in_company_since'
                  className='d-flex align-items-center fs-5 fw-semibold mb-2'
                >
                  {intl.formatMessage({ id: 'FORM.INPUT.NAME.IN_COMPANY_SINCE' })}
                </label>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  name='in_company_since'
                  id='in_company_since'
                  disabled={currentUser?.type_id === 1 ? false : true}
                  value={data.in_company_since ?? ''}
                  onChange={(e) =>
                    updateData({
                      in_company_since: e.target.value,
                      birthday: data.birthday,
                    })
                  }
                />
              </div>
            ) : ''}
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
            {currentUser?.type_id === 1 ? <div className='fv-row mb-3'>
              <label htmlFor='cost_hour' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
                <span className='required'>{intl.formatMessage({ id: 'FORM.INPUT.NAME.COST_HOUR' })}</span>
              </label>
              {/* <InputCurrency
                className={clsx(
                  'form-control form-control-lg form-control-solid',
                  { 'is-invalid': !props.touched.cost_hour && props.errors.cost_hour },
                  {
                    'is-valid': data.cost_hour && !props.errors.cost_hour,
                  }
                )}
                value={data.cost_hour || 0}
                onChange={(e: any) => {
                  updateData({
                    cost_hour: e.target.value,
                  })
                }}
              /> */}
              {/* // <InputMoney
              
              // title=''
              // margin=''
              // className={clsx(
              //   'form-control form-control-lg form-control-solid',
              //   {'is-invalid': !props.touched.cost_hour && props.errors.cost_hour},
              //   {
              //     'is-valid':  data.cost_hour && !props.errors.cost_hour,
              //   }
              // )}
              // value={parseFloat(data.cost_hour) || 0}
              // defaultValue={0}
              // onChange={(e:any) =>{
              //   props.setFieldValue('cost_hour', e.target.value)
              //   updateData({
              //     cost_hour: e.target.value,
              //   })
              // }
              // }
              // /> */}
              {!props.touched.cost_hour && data.cost_hour && props.errors.cost_hour && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{props.errors.cost_hour}</span>
                  </div>
                </div>
              )}
              {!data.cost_hour && hasError && (
                <div className='fv-plugins-message-container'>
                  <div data-field='shift_time' data-validator='notEmpty' className='fv-help-block'>
                    {intl.formatMessage({ id: 'FORM.INPUT.VALIDATION.REQUIRED' })}
                  </div>
                </div>
              )}
            </div> : ''}
          </div>
        </div>
      </div>
    </div>
  )
}
export { Step2 }