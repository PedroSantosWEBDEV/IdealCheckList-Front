import React, {FC, useEffect, useRef, useState} from 'react'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {ID, KTSVG} from '../../../../_metronic/helpers'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import { UserModalContentWrapper } from './UserModalContentWrapper'


type Props = {
  userId: ID
}
const NewUser: React.FC<Props> = ({userId}) => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)

  const [isLoanding,setIsLoading] = useState(true)
// debugger;
  useEffect(() => {
    // console.log("Entrou Aqui")
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  },[isLoanding])

  const loadStepper =  () => {
     stepper.current =  StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  return (

      <UserModalContentWrapper id={userId} loadStepper={loadStepper} setIsLoading={setIsLoading} stepper={stepper} stepperRef ={stepperRef} />
  )
}

export {NewUser}
