/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

type Props = {
  name: string
}

const UserNameCell: FC<Props> = ({ name}) => (
  <div className='d-flex align-items-center'>
    <div className='d-flex flex-column'>
      <p className='text-gray-900 mb-1'>
        {name}
      </p>
    </div>
  </div>
)

export {UserNameCell}
