import {Dispatch, SetStateAction, FC} from 'react'
import {useIntl} from 'react-intl'
import {KTCardBody} from '../../../../../../../_metronic/helpers'
import {useAuth} from '../../../../../auth'

type Props = {
  setShowCreateModal: Dispatch<SetStateAction<boolean>>
}

const UsersPlaceholder: FC<Props> = ({setShowCreateModal}) => {
  const intl = useIntl()
  const {currentUser} = useAuth()

  const openEditModal = () => {
    setShowCreateModal(true)
  }

  return (
    <div id='kt_users_cards_pane' className='tab-pane fade show active'>
      <KTCardBody className='px-0'>
        <div className='card-px text-center pt-10 pb-10'>
          {/*begin::Title*/}
          <h2 className='fs-2x fw-bold mb-0'>{intl.formatMessage({id: 'USER.CREATE_FIRST_USER'})}</h2>
          {/*end::Title*/}
          {
            currentUser?.type_id === 1
            &&
            <>
              {/*begin::Action*/}
              <button
                onClick={openEditModal}
                className='btn btn-primary er fs-6 px-8 py-4 mt-10'
              >
                {intl.formatMessage({id: 'TOOLBAR.NEW_USER'})}
              </button>
              {/*end::Action*/}
            </>
          }
        </div>
        <div className='text-center pb-15 px-5'>
          <img
            src='/media/illustrations/sketchy-1/2.png'
            alt=''
            className='mw-100 h-200px h-sm-325px'
          />
        </div>
      </KTCardBody>
    </div>
  )
}

export {UsersPlaceholder}
