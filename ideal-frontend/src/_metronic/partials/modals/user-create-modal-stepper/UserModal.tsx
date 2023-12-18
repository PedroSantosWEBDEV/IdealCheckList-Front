import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {UserModalContentWrapper} from './UserModalContentWrapper'
import { StepperComponent } from '../../../assets/ts/components'
import { useRef, useState} from 'react'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  userId: ID
}

const UserModal: React.FC<Props> = ({show, handleClose, userId}) => {
// debugger;
  return (
    <Modal
    id='kt_modal_edit_project'
    tabIndex={-1}
    aria-hidden='true'
    dialogClassName='modal-dialog modal-dialog-centered mw-900px'
    show={show}
    onHide={handleClose}
    backdrop={true}
  >
      <UserModalContentWrapper id={userId} handleClose={handleClose} />
    </Modal>
  )
}

export {UserModal}