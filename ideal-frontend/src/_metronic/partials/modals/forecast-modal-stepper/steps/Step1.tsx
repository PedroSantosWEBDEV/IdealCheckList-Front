/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {StepProps} from '../ForecastModels'

const Step1 = ({data, updateData, hasError}: StepProps) => {
  const intl = useIntl()
  
  return (
    <div className='current' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row mb-4'>
          <label htmlFor='company_name' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>
              {intl.formatMessage({id: 'FORM.INPUT.NAME.COMPANY_NAME'})}
            </span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.COMPANY_NAME'})}
            ></i>
          </label>
          <input
            type='text'
            className='form-control form-control-lg form-control-solid'
            name='user-name'
            id='user-name'
            placeholder=''
            value={data.projectBasic.company_name}
            onChange={(e: any) =>
              updateData({
                projectBasic: {
                  company_name: e.target.value,
                  user_manager: data.projectBasic.user_manager,
                  project_summary: data.projectBasic.project_summary
                },
              })
            }
          />
          {!data.projectBasic.company_name && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='company_name' data-validator='notEmpty' className='fv-help-block'>
                {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}

        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label htmlFor='user-email' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>{intl.formatMessage({id: 'FORM.INPUT.NAME.USER_MANAGER'})}</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.USER_MANAGER'})}
            ></i>
          </label>
          <input
            type='email'
            className='form-control form-control-lg form-control-solid'
            name='user-email'
            id='user-email'
            placeholder=''
            value={data.projectBasic.user_manager}
            onChange={(e) =>
              updateData({
                projectBasic: {
                  company_name: data.projectBasic.company_name,
                  user_manager: e.target.value,
                  project_summary: data.projectBasic.project_summary
                },
              })
            }
          />
          {!data.projectBasic.user_manager && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='user-email' data-validator='notEmpty' className='fv-help-block'>
                {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}
        {/*begin::Form Group */}
        <div className='fv-row mb-10'>
          <label htmlFor='project_summary' className='d-flex align-items-center fs-5 fw-semibold mb-2'>
            <span className='required'>{intl.formatMessage({id: 'FORM.INPUT.NAME.PROJECT_SUMMARY'})}</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.PROJECT_SUMMARY'})}
            ></i>
          </label>
          <textarea className='form-control form-control-lg form-control-solid'name='project_summary'
            id='project_summary'
            placeholder=''
            value={data.projectBasic.project_summary}
            onChange={(e) =>
              updateData({
                projectBasic: {
                  company_name: data.projectBasic.company_name,
                  user_manager: data.projectBasic.user_manager ,
                  project_summary: e.target.value
                },
              })
            }/>
          {!data.projectBasic.project_summary && hasError && (
            <div className='fv-plugins-message-container'>
              <div data-field='project_summary' data-validator='notEmpty' className='fv-help-block'>
                {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
              </div>
            </div>
          )}
        </div>
        {/*end::Form Group */}
        
      </div>
    </div>
  )
}

export {Step1}
