import {FC} from 'react'
import {AdjustTimeModalContent} from './AdjustTimeModalContent'

type Props = {
  handleClose: () => void | undefined
}

const AdjustTimeModalContentWrapper: FC<Props> = ({handleClose}) => {
  return <AdjustTimeModalContent handleClose={handleClose} />
}

export {AdjustTimeModalContentWrapper}