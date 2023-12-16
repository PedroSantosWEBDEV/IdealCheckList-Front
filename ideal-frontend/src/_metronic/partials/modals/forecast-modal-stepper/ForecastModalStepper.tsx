/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useRef} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {useIntl} from 'react-intl'
import {defaultCreateUserData, CreateUserData} from './ForecastModels'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'

import * as Yup from 'yup'
import {StepperComponent} from '../../../assets/ts/components'
import {KTSVG} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
}

const modalsRoot = document.getElementById('root-modals') || document.body

const ForecastModalStepper = ({show, handleClose}: Props) => {
  const intl = useIntl()
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [data, setData] = useState<CreateUserData>(defaultCreateUserData)
  const [hasError, setHasError] = useState(false)

  // const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const updateData = (fieldsToUpdate: Partial<CreateUserData>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }

  const checkProjectBasic = (): boolean => {
    if (!data.projectBasic.company_name || !data.projectBasic.user_manager) {
      return false
    }
    return true
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()
  }

  const nextStep = () => {
    setHasError(false)
    if (!stepper.current) {
      return
    }

    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!checkProjectBasic()) {
        setHasError(true)
        return
      }
    }

    stepper.current.goNext()
  }

  const submit = () => {
    const forecast_id = 1;
    window.location.href = `forecast-chart/${forecast_id}`
  }

  return createPortal(
    <Modal
      id='kt_modal_edit_project'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-900px'
      show={show}
      onHide={handleClose}
      onEntered={loadStepper}
      backdrop={true}
    >
      <div className='modal-header'>
        <h2>{intl.formatMessage({id: 'MODAL.TITLE.LEADTIME_PROJECT'})}</h2>
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTSVG className='svg-icon-1' path='/media/icons/duotune/arrows/arr061.svg' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-6 px-lg-6'>
        {/*begin::Stepper */}
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_modal_edit_project_stepper'
        >
          <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
            {/* begin::Aside*/}
            <div className='card-body px-6 px-lg-6 px-xxl-6 py-10'>
              {/* begin::Nav*/}
              <div className='stepper-nav'>
                {/* begin::Step 1*/}
                <div className='stepper-item current' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>1</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title'>
                        {intl.formatMessage({id: 'FORM.STEP.NAME.DETAILS'})}
                      </h3>

                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.CREATE_OFFER'})}
                      </div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 1*/}

                {/* begin::Step 2*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>2</span>
                    </div>
                    {/* begin::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title'>
                        {intl.formatMessage({id: 'FORM.STEP.NAME.INFORMATION'})}
                      </h3>

                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.BUDGET'})}
                      </div>
                    </div>
                    {/* begin::Label*/}
                  </div>
                  {/* end::Wrapper*/}

                  {/* begin::Line*/}
                  <div className='stepper-line h-40px'></div>
                  {/* end::Line*/}
                </div>
                {/* end::Step 2*/}

                {/* begin::Step 3*/}
                <div className='stepper-item' data-kt-stepper-element='nav'>
                  {/* begin::Wrapper*/}
                  <div className='stepper-wrapper'>
                    {/* begin::Icon*/}
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>3</span>
                    </div>
                    {/* end::Icon*/}

                    {/* begin::Label*/}
                    <div className='stepper-label'>
                      <h3 className='stepper-title'>
                        {intl.formatMessage({id: 'FORM.STEP.NAME.EXPENSES_COSTS'})}
                      </h3>

                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.COSTS_PROJECT'})}
                      </div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}
                  {/* begin::Line*/}
                  {/* <div className='stepper-line h-40px'></div> */}
                  {/* end::Line*/}
                </div>
                {/* end::Step 3*/}

                {/* begin::Step 4*/}
                {/* <div className='stepper-item' data-kt-stepper-element='nav'>
                 
                  <div className='stepper-wrapper'>
                  
                    <div className='stepper-icon w-40px h-40px'>
                      <i className='stepper-check fas fa-check'></i>
                      <span className='stepper-number'>4</span>
                    </div>
                  
                
                    <div className='stepper-label'>
                      <h3 className='stepper-title'>
                        {intl.formatMessage({id: 'FORM.STEP.NAME.REVIEW'})}
                      </h3>

                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.REVIEW_PROPOSE'})}
                      </div>
                    </div>
                    
                  </div>
                </div> */}
                {/* end::Step 4*/}
              </div>
              {/* end::Nav*/}
            </div>
            {/* begin::Aside*/}
          </div>
          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-6'>
            {/*begin::Form */}
            <form noValidate id='kt_modal_edit_project_form'>
              <Step1 data={data} updateData={updateData} hasError={hasError} />
              <Step2 data={data} updateData={updateData} hasError={hasError} />
              <Step3 data={data} updateData={updateData} hasError={hasError} />
              <div className='d-flex flex-stack pt-10'>
                <div className='me-2'>
                  <button
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                    onClick={prevStep}
                  >
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr063.svg'
                      className='svg-icon-3 me-1'
                    />{' '}
                    {intl.formatMessage({id: 'GENERAL.BACK'})}
                  </button>
                </div>
                <div>
                  <button
                    type='button'
                    className='btn btn-lg btn-primary'
                    data-kt-stepper-action='submit'
                    onClick={submit}
                  >
                    {intl.formatMessage({id: 'GENERAL.VIEW'})}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-2 me-0'
                    />
                  </button>

                  <button
                    type='button'
                    className='btn btn-lg btn-primary'
                    data-kt-stepper-action='next'
                    onClick={nextStep}
                  >
                    {intl.formatMessage({id: 'GENERAL.NEXT_STEP'})}{' '}
                    <KTSVG
                      path='/media/icons/duotune/arrows/arr064.svg'
                      className='svg-icon-3 ms-1 me-0'
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>,
    modalsRoot
  )
}

export {ForecastModalStepper}
