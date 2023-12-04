import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {TeamModalContentWrapper} from './TeamModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  teamId: ID
}

const TeamModal: React.FC<Props> = ({show, handleClose, teamId}) => {
  // debugger;
  return (
    <Modal className='px-md-5' id='kt_modal_user' data-backdrop='static' tabIndex={-1} role='dialog' show={show}
      dialogClassName='mw-500px modal-dialog-centered' aria-hidden='true' onHide={handleClose}>
      <TeamModalContentWrapper id={teamId} handleClose={handleClose} />
    </Modal>
  )
}

export {TeamModal}