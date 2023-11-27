import {Modal} from 'react-bootstrap'
import {ID} from '../../../../_metronic/helpers'
import {UserModalContentWrapper} from './UserModalContentWrapper'
import { StepperComponent } from '../../../../_metronic/assets/ts/components'
import { useRef, useState ,useEffect} from 'react'

type Props = {
  show: boolean
  userId: ID
}

const NewUser: React.FC<Props> = ({show, userId}) => {
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
  // console.log(stepper);
  // console.log(stepperRef);
// debugger;
  return (
    <Modal
    id='kt_modal_edit_project'
    tabIndex={-1}
    aria-hidden='true'
    dialogClassName='modal-dialog modal-dialog-centered mw-900px'
    show={show}
    onEntered={loadStepper}
    backdrop={true}
  >
      <UserModalContentWrapper id={userId} setIsLoading={setIsLoading} stepper={stepper} stepperRef ={stepperRef} />
    </Modal>
  )
}

export {NewUser}