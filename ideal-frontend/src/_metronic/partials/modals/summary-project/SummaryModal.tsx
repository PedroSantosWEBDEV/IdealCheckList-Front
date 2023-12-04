import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {SummaryModalContentWrapper} from './SummaryModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
  summaryId: ID
}

const SummaryModal: React.FC<Props> = ({show, handleClose, summaryId}) => {
  return (
    <Modal className='px-md-5' id='kt_modal_mark' data-backdrop='static' tabIndex={-1} role='dialog' show={show}
      dialogClassName='mw-500px modal-dialog-centered' aria-hidden='true' onHide={handleClose}>
      <SummaryModalContentWrapper id={summaryId} handleClose={handleClose} />
    </Modal>
  )
}

export {SummaryModal}