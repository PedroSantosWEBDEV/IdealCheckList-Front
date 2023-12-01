/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {User} from '../../../core/_models'

type Props = {
  closed_at?: string | null
  begin_date: string
  end_date: string
}

const UserStatusCell: FC<Props> = ({closed_at, begin_date, end_date}) =>{
  const intl = useIntl()
  const now = new Date()
  const begin = new Date(begin_date)
  const end = new Date(end_date)
  var status = ''
  var statusColor = ''

  if(!closed_at) {
    if(begin && end) {
      if(now < begin) {
        status = intl.formatMessage({id: 'USER.LABEL.PAUSED'})
        statusColor = 'light-success'
      } else if(now > begin && now < end) {
        status = intl.formatMessage({id: 'USER.LABEL.IN_PROGRESS'})
        statusColor = 'light-primary'
      } else if(now > end) {
        status = intl.formatMessage({id: 'USER.LABEL.DELAYED'})
        statusColor = 'light-danger'
      }
    } else {
      status = intl.formatMessage({id: 'USER.LABEL.IN_PROGRESS'})
      statusColor = 'light-primary'
    }
  } else {
    status = intl.formatMessage({id: 'USER.LABEL.CLOSED'})
    statusColor = 'light-success'
    
    if(begin && end) {
      if(now > end) {
        status = intl.formatMessage({id: 'USER.LABEL.CLOSED_WITH_DELAY'})
        statusColor = 'light-danger'
      }
    }
  }

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column align-items-center'>
        <span className={`badge badge-${statusColor} fw-bolder px-4 py-3 `}>{status}</span>
        <p className='text-gray-900 mb-1'>
        </p>
      </div>
    </div>
  )
}

export {UserStatusCell}
