import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {TypeModalContentWrapper} from './TypeModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  typeId: ID
}

const TypeModal: React.FC<Props> = ({show, handleClose, typeId}) => {
  //  debugger;
  return (
    <Modal
    id='kt_modal_edit_project'
    tabIndex={-1}
    aria-hidden='true'
    dialogClassName='modal-dialog modal-dialog-centered mw-500px'
    show={show}
    onHide={handleClose}
    backdrop={true}
  >
      <TypeModalContentWrapper id={typeId} handleClose={handleClose} />
    </Modal>
  )
}

export {TypeModal}