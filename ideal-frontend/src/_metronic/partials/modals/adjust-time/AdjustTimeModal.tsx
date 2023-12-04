import {Modal} from 'react-bootstrap'
import {ID} from '../../../helpers'
import {AdjustTimeModalContentWrapper} from './AdjustTimeModalContentWrapper'

type Props = {
  show: boolean
  handleClose: () => void | undefined
}

const AdjustTimeModal: React.FC<Props> = ({show, handleClose}) => {
  return (
    <Modal className='px-md-5' id='kt_modal_adjust_time' data-backdrop='static' tabIndex={-1} role='dialog' show={show}
      dialogClassName='mw-600px modal-dialog-centered' aria-hidden='true' onHide={handleClose}>
      <AdjustTimeModalContentWrapper handleClose={handleClose} />
    </Modal>
  )
}

export {AdjustTimeModal}