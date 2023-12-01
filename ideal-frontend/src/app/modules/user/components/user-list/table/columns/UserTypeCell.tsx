/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {useIntl} from 'react-intl'
import {toAbsoluteUrl} from '../../../../../../../_metronic/helpers'
import {User} from '../../../core/_models'

type Props = {
  type: boolean
}

const UserTypeCell: FC<Props> = ({type}) => {
  const intl = useIntl()

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='d-flex flex-column align-items-center'>
        <p className='text-gray-900 mb-1'>
      {
      type
      ?
      intl.formatMessage({id: 'FORM.INPUT.NAME.CLOSED_SCOPE'})
      :
      intl.formatMessage({id: 'FORM.INPUT.NAME.RECURRENT_USER'})
    }
    </p>
      </div>
    </div>
  )
}

export {UserTypeCell}
