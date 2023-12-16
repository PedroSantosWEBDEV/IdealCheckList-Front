import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {UserModalContentWrapper} from './UserModalContentWrapper'
import { StepperComponent } from '../../../assets/ts/components'
import { useRef, useState ,useEffect} from 'react'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  userId: ID
}

const UserModal: React.FC<Props> = ({show, handleClose, userId}) => {
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
    onHide={handleClose}
    onEntered={loadStepper}
    backdrop={true}
  >
      <UserModalContentWrapper id={userId} setIsLoading={setIsLoading} stepper={stepper} stepperRef ={stepperRef} handleClose={handleClose} />
    </Modal>
  )
}

export {UserModal}