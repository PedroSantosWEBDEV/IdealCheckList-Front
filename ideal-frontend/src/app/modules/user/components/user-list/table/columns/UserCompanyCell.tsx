/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {User} from '../../../core/_models'

type Props = {
  companyName: string
}

const UserCompanyCell: FC<Props> = ({companyName}) => (
  <div className='d-flex align-items-center'>
    <div className='d-flex flex-column'>
      <p className='text-gray-900 mb-1'>
        {companyName}
      </p>
    </div>
  </div>
)

export {UserCompanyCell}
