import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {UserAddModalContentWrapper} from './UserAddModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  userId: ID
}

const UserAddModal: React.FC<Props> = ({show, handleClose, userId}) => {
  return (
    <Modal className='px-md-5' id='kt_modal_user' data-backdrop='static' tabIndex={-1} role='dialog' show={show}
      dialogClassName='mw-500px modal-dialog-centered' aria-hidden='true' onHide={handleClose}>
      <UserAddModalContentWrapper id={userId} handleClose={handleClose} />
    </Modal>
  )
}

export {UserAddModal}