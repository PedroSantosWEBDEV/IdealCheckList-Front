import { useIntl } from 'react-intl'
import { StepProps } from '../core/_models'
import clsx from 'clsx'

const Step3 = ({ data, updateData, hasError, props }: StepProps) => {
  const intl = useIntl()
  // console.log(data)
  return (
    <>
      {/*begin::Step 3 */}
      <div className='pb-5 mt-20' data-kt-stepper-element='content'>
        <div className='w-100'>
          <div className='fv-row mt-5'>
            <div className='col-md-12'>
              <h4>{intl.formatMessage({ id: 'FORM.INPUT.NAME.WORK_DAYS' })}</h4>
              <div className='btn-group mb-2' role='group'>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='mondey'
                  name='work_days'
                  value={2}
                  // defaultChecked={monday}
                  defaultChecked={data.workdays.includes(2)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                      shift_time: data.shift_time,
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='mondey'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.MONDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='tuesday'
                  name='work_days'
                  // defaultChecked={tuesday}
                  value={3}
                  defaultChecked={data.workdays.includes(3)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                      shift_time: data.shift_time,
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='tuesday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.TUESDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='wednesday'
                  name='work_days'
                  value={4}
                  defaultChecked={data.workdays.includes(4)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='wednesday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.WEDNESDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='thursday'
                  name='work_days'
                  value={5}
                  defaultChecked={data.workdays.includes(5)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='thursday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.THURSDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='friday'
                  name='work_days'
                  value={6}
                  defaultChecked={data.workdays.includes(6)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='friday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.FRIDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='saturday'
                  name='work_days'
                  value={7}
                  defaultChecked={data.workdays.includes(7)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='saturday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.SATURDAY' })}
                </label>
                <input
                  type='checkbox'
                  className='btn-check'
                  id='sunday'
                  name='work_days'
                  value={1}
                  defaultChecked={data.workdays.includes(1)}
                  onChange={(e: any) => {
                    const index = data.workdays.indexOf(parseInt(e.target.value))
                    updateData({
                      workdays:
                        !e.target.checked && index > -1
                          ? data.workdays.filter(
                            (workdays) => workdays !== parseInt(e.target.value)
                          )
                          : data.workdays.concat(parseInt(e.target.value)),
                    })
                  }}
                />
                <label
                  className='btn btn-outline btn-outline-primary rounded fw-normal py-1 px-3'
                  htmlFor='sunday'
                >
                  {intl.formatMessage({ id: 'WEEKDAYS.SUNDAY' })}
                </label>
              </div>
              <div className='d-flex align-items-center mb-3' role='group'>
                {data.workdays.length > 0
                  ? false
                  : true &&
                  hasError && (
                    <div className='fv-plugins-message-container ms-5'>
                      <div
                        data-field='workdays'
                        data-validator='notEmpty'
                        className='fv-help-block'
                      >
                        {intl.formatMessage({ id: 'FORM.INPUT.VALIDATION.REQUIRED' })}
                      </div>
                    </div>
                  )}
                {data.workdays.length * parseInt(data.shift_time) <= 44
                  ? false
                  : true &&
                  data.shift_time && (
                    <div className='fv-plugins-message-container ms-5'>
                      <div
                        data-field='workdays'
                        data-validator='notEmpty'
                        className='fv-help-block'
                      >
                        {intl.formatMessage({ id: 'FORM.INPUT.VALIDATION.MAX_HOURS' })}
                      </div>
                    </div>
                  )}
              </div>
              <div className='d-flex align-items-center'>
                <div className='row justify-content-between'>
                  <div className='col-md-8'>
                    <div className='input-group'>
                      <span className='input-group-text'>
                        {intl.formatMessage({ id: 'FORM.INPUT.NAME.WORKDAYS' })}
                      </span>
                      <input
                        type='number'
                        id='shift_time'
                        min={0}
                        name='shift_time'
                        value={data.shift_time ?? ''}
                        onChange={(e: any) => {
                          props.setFieldValue('shift_time', e.target.value)
                          updateData({
                            shift_time: e.target.value,
                          })
                        }}
                        className={clsx(
                          'form-control form-control-solid py-2 bg-transparent rounded fw-normal',
                          { 'is-invalid': !props.touched.shift_time && props.errors.shift_time },
                          {
                            'is-valid': data.shift_time && !props.errors.shift_time,
                          }
                        )}
                        autoComplete='off'
                      />
                    </div>
                    {!props.touched.shift_time && data.shift_time && props.errors.shift_time && (
                      <div className='fv-plugins-message-container'>
                        <div className='fv-help-block'>
                          <span role='alert'>{props.errors.shift_time}</span>
                        </div>
                      </div>
                    )}
                    {!data.shift_time && hasError && (
                      <div className='fv-plugins-message-container'>
                        <div
                          data-field='shift_time'
                          data-validator='notEmpty'
                          className='fv-help-block'
                        >
                          {intl.formatMessage({ id: 'FORM.INPUT.VALIDATION.REQUIRED' })}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='col-md-4 mt-3 ps-md-5'>
                    <span className='fs-4 fw-bold required'>
                      {intl.formatMessage(
                        { id: 'FORM.INPUT.NAME.HOURS_PER_WEEK' },
                        {
                          hours:
                            data.workdays && data.shift_time
                              ? data.workdays.length * parseInt(data.shift_time) + 'h'
                              : '0h',
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center mt-5' role='group'>
                <div className='form-check form-switch form-check-custom form-check-solid'>
                  <input
                    type='checkbox'
                    className='form-check-input h-25px w-40px'
                    name='administrator'
                    defaultChecked={data.administrator === 1 ? true : false}
                    onChange={(e: any) => {
                      updateData({
                        administrator: e.target.checked,
                      })
                    }}
                  />
                  {props.touched.administrator && props.errors.administrator && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{props.errors.administrator}</span>
                      </div>
                    </div>
                  )}
                  <label className='form-check-label' htmlFor='recurrent'>
                    {intl.formatMessage({ id: 'FORM.INPUT.NAME.ADMINISTRATOR' })}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export { Step3 }