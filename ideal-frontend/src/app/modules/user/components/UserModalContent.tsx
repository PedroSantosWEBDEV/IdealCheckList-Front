import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {ID, KTSVG, isNotEmpty} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {Formik, Form, FormikValues} from 'formik'
import * as Yup from 'yup'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountWizardHelper'
import { ResponseUser, User } from './core/_models'
import { useAuth } from '../../auth'
import { useIntl } from 'react-intl'
import { useQueryResponse } from './core/QueryResponseProvider'
import { useMutation, useQueryClient } from 'react-query'
import { UsersListLoading } from './loading/UsersListLoading'
import Swal from 'sweetalert2'
import { createUser, getEmailValid, updateUser } from './core/_requests'

type Props = {
  userId: ID
  user: ResponseUser
  stepper: React.MutableRefObject<StepperComponent | null>
  stepperRef: React.MutableRefObject<HTMLDivElement | null>
}
const UserModalContent: FC<Props> = ({userId, user, stepperRef, stepper}) => {
  const {currentUser} = useAuth()
  const intl = useIntl()
  const [data, setData] = useState<User>(user.users)
  const [isSubmitting, setSubmitting] = useState(false)
  const [hasError, setHasError] = useState(false)
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()
  
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
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0])
  const updateData = (fieldsToUpdate: Partial<User>) => {
    const updatedData = {...data, ...fieldsToUpdate}
    setData(updatedData)
  }
  const checkUserBasic = () => {
    // debugger
    if (!data.name || !data.email) {
      return false
    }
    return true
  }
  const emailValid = useMutation(() =>
    getEmailValid(data).then((response) => {
      // debugger;
      const CurrentTheme = window.localStorage.getItem('kt_theme_mode_value') || ''
      let theme = ''
      if (CurrentTheme === 'dark') {
        theme = '#353b48'
      } else {
        theme = '#fff'
      }
      if (response?.errors === true) {
      // console.log(theme)
      Swal.fire({
        icon: 'warning',
        html: "<h5>"+response?.message+"</h5>",
        background: theme,
        confirmButtonColor: '#009ef7',
        color: '#fff',
      })
        return true
      } else {
        return false
      }
    })
  )
  const checkUserAdvanced = (): boolean => {
    if (!data.id) {
      if (!data.password || !data.cost_hour) {
        return false
      }
      return true
    } else {
      if (!data.cost_hour) {
        return false
      }
      return true
    }
  }
  const checkUserWorkDays = (): boolean => {
    // debugger;
    const shift_time = isNotEmpty(data.shift_time)
    const work_days = data.workdays.length > 0 ? false : true
    if (!shift_time || work_days) {
      return false
    }
    return true
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }
    if (stepper.current.currentStepIndex === 2) {
      setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 2])
    } else {
      setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
    }
    stepper.current.goPrev()
  }
  const nextStep = async () => {
    setHasError(false)
    if (!stepper.current) {
      return
    }
    if (stepper.current.getCurrentStepIndex() === 1) {
      if (!data.id) {
        if (await emailValid.mutateAsync()) {
          setHasError(true)
          return
        } else if (!checkUserBasic()) {
          setHasError(true)
          return
        }
      }
    } else if (stepper.current.getCurrentStepIndex() === 2) {
      if (!checkUserAdvanced()) {
        setHasError(true)
        return
      }
    }
    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex])
    
    stepper.current.goNext()
  }

  const create = useMutation(() => createUser(data), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
      // debugger;
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
        html: "<h5>"+response?.message+"</h5>",
        background: theme,
        confirmButtonColor: '#009ef7',
        color: '#fff',
      })
      
      queryClient.invalidateQueries()
    },
    onError: (error: any) => {
      setSubmitting(false)
      Swal.fire({
        icon: 'warning',
        // text: error.response.data.errors.email[0],
      })
    },
  })
  const update = useMutation(() => updateUser(data), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: (response) => {
      // ✅ update detail view directly
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
      
      queryClient.invalidateQueries()
    },
    onError: (error: any) => {
      setSubmitting(false)
      Swal.fire({
        icon: 'warning',
        text: error.response.data.errors.email[0],
      })
    },
  })

  const submit = () => {
    setHasError(false)
    if (!stepper.current) {
      return
    }
    if (stepper.current.getCurrentStepIndex() === 3) {
      if (!checkUserWorkDays()) {
        setHasError(true)
        return
      } else {
        // data.cost_hour = data.cost_hour.replace('.', '').replace(',', '.')
        if (userId) {
          setSubmitting(true)
          return update.mutateAsync()
        } else {
          setSubmitting(true)
          return create.mutateAsync()
        }
      }
    }else {
      if (userId) {
        setSubmitting(true)
        return update.mutateAsync()
      } else {
        // debugger;
        setSubmitting(true)
        return create.mutateAsync()
      }
    }
  }

  return (
    <>
      <div className='modal-header'>
        <h2>{intl.formatMessage({id: 'MODAL.TITLE.USER'})}</h2>
      </div>
      <div className='modal-body py-lg-12 px-lg-12'>
        {/*begin::Stepper */}
        <div
          ref={stepperRef}
          className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
          id='kt_modal_edit_project_stepper'
        >
          <div className='d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px'>
            {/* begin::Aside*/}
            <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
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
                        {intl.formatMessage({id: 'FORM.STEP.NAME.BASE_DETAILS'})}
                      </h3>
                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.BASE_DETAILS'})}
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
                        {intl.formatMessage({id: 'FORM.STEP.NAME.ADVANCED_DETAILS'})}
                      </h3>
                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.ADVANCED_DETAILS'})}
                      </div>
                    </div>
                    {/* begin::Label*/}
                  </div>
                  {/* end::Wrapper*/}
                  {/* begin::Line*/}
                  {currentUser?.type_id === 1 ? <div className='stepper-line h-40px'></div> : ''}
                  {/* end::Line*/}
                </div>
                {/* end::Step 2*/}
                {/* begin::Step 3*/}
                {currentUser?.type_id === 1 ? <div className='stepper-item' data-kt-stepper-element='nav'>
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
                        {intl.formatMessage({id: 'FORM.STEP.NAME.WORDAY'})}
                      </h3>
                      <div className='stepper-desc'>
                        {intl.formatMessage({id: 'FORM.STEP.DESCRIPTION.CONFIG_WORK_DAYS'})}
                      </div>
                    </div>
                    {/* end::Label*/}
                  </div>
                  {/* end::Wrapper*/}
                </div> : ''}
                {/* end::Step 3*/}
              </div>
              {/* end::Nav*/}
            </div>
            {/* begin::Aside*/}
          </div>
          {/*begin::Content */}
          <div className='flex-row-fluid py-lg-5 px-lg-15'>
            {/*begin::Form */}
            <Formik validationSchema={currentSchema} initialValues={data} onSubmit={submit}>
              {(props) => (
                <form noValidate id='kt_modal_edit_project_form'>
                  <Step1 data={data} updateData={updateData} hasError={hasError} props={props} />
                  <Step2 data={data} updateData={updateData} hasError={hasError} props={props} />
                  {currentUser?.type_id === 1 ? <Step3 data={data} updateData={updateData} hasError={hasError} props={props} /> : ''}
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
                        />
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
                        {intl.formatMessage({id: 'GENERAL.SAVE_BUTTON'})}
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
                        disabled={data.id ? props.isSubmitting : props.isSubmitting || !props.isValid || !props.touched }
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
              )}
            </Formik>
          </div>
        </div>
      </div>
      {isSubmitting && <UsersListLoading />}
    </>
    // <div className='card'>
    //   <div className='card-body'>
    //     <div
    //       ref={stepperRef}
    //       className='stepper stepper-links d-flex flex-column pt-15'
    //       id='kt_create_account_stepper'
    //     >
    //       <div className='stepper-nav mb-5'>
    //       <div className='stepper-item current' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Account Info</h3>
    //         </div>

    //         <div className='stepper-item' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Business Info</h3>
    //         </div>

    //         <div className='stepper-item' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Billing Details</h3>
    //         </div>

    //         <div className='stepper-item' data-kt-stepper-element='nav'>
    //           <h3 className='stepper-title'>Completed</h3>
    //         </div>
    //       </div>

    //       <Formik validationSchema={currentSchema} initialValues={initValues} onSubmit={submitStep}>
    //         {() => (
    //           <Form className='mx-auto mw-600px w-100 pt-15 pb-10' id='kt_create_account_form'>
    //             <div className='current' data-kt-stepper-element='content'>
    //               <Step2 />
    //             </div>

    //             <div data-kt-stepper-element='content'>
    //               <Step3 />
    //             </div>

    //             <div data-kt-stepper-element='content'>
    //               <Step4 />
    //             </div>

    //             <div data-kt-stepper-element='content'>
    //               <Step5 />
    //             </div>

    //             <div className='d-flex flex-stack pt-15'>
    //               <div className='mr-2'>
    //                 <button
    //                   onClick={prevStep}
    //                   type='button'
    //                   className='btn btn-lg btn-light-primary me-3'
    //                   data-kt-stepper-action='previous'
    //                 >
    //                   <KTSVG
    //                     path='/media/icons/duotune/arrows/arr063.svg'
    //                     className='svg-icon-4 me-1'
    //                   />
    //                   Back
    //                 </button>
    //               </div>

    //               <div>
    //                 <button type='submit' className='btn btn-lg btn-primary me-3'>
    //                   <span className='indicator-label'>
    //                     {!isSubmitButton && 'Continue'}
    //                     {isSubmitButton && 'Submit'}
    //                     <KTSVG
    //                       path='/media/icons/duotune/arrows/arr064.svg'
    //                       className='svg-icon-3 ms-2 me-0'
    //                     />
    //                   </span>
    //                 </button>
    //               </div>
    //             </div>
    //           </Form>
    //         )}
    //       </Formik>
    //     </div>
    //   </div>
    // </div>
  )
}

export {UserModalContent}
