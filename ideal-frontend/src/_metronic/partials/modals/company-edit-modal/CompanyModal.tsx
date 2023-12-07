import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {CompanyModalContentWrapper} from './CompanyModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  typeId: ID
}

const CompanyModal: React.FC<Props> = ({show, handleClose, typeId}) => {
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
      <CompanyModalContentWrapper id={typeId} handleClose={handleClose} />
    </Modal>
  )
}

export {CompanyModal}