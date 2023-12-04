import {FC} from 'react'
import {KTSVG} from '../../../helpers'
import {useIntl} from 'react-intl'
import {User} from './core/_models'
import { MuiAutoComplete } from './mui/MuiAutoComplete'

type Props = {
  isTaskLoading: boolean
  user: User
  handleClose: () => void | undefined
}
const UserAddModalContent: FC<Props> = ({handleClose}) => {
  const intl = useIntl()

  // console.log(users);
  return (
    <div className='modal-content'>
      <div className='modal-header pb-0 border-0 justify-content-end'>
        <button
          className='btn btn-sm btn-icon btn-active-color-primary h-auto ms-4'
          onClick={handleClose}
        >
          <KTSVG
            className='svg-icon-2x svg-icon-gray-800'
            path='/media/icons/duotune/arrows/arr061.svg'
          />
        </button>
      </div>
      <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
      <div className='text-center mb-13'>
          <h1 className='mb-3'>{intl.formatMessage({id: 'PROJECT.ADD.USERS'})}</h1>
          <div className='text-muted fw-semibold fs-5'>{intl.formatMessage({id: 'PROJECT.ADD.USERS.SPAN'})}</div>
        </div>
      <div
          className='d-flex flex-column scroll-y me-n7 pe-7'
          id='kt_modal_add_team_scroll'
          data-kt-scroll='true'
          data-kt-scroll-activate='{default: false, lg: true}'
          data-kt-scroll-max-height='auto'
          data-kt-scroll-dependencies='#kt_modal_add_team_header'
          data-kt-scroll-wrappers='#kt_modal_add_team_scroll'
          data-kt-scroll-offset='200px'
        >
          {/* begin::Input group */}
          <div className='mb-7'>
           <MuiAutoComplete />
          </div>
          {/* end::Input group */}
        </div>
        {/* end::Scroll */}

        {/* begin::Actions */}
        <div className='text-center pt-10'>
          <button
            type='reset'
            className='btn btn-light me-3'
            data-kt-teams-modal-action='cancel'

          >
            {intl.formatMessage({id: 'FORM.GENERAL.CANCEL_BUTTON'})}
          </button>

          <button
            type='submit'
            className='btn btn-primary'
            data-kt-teams-modal-action='submit'
          >
            <span className='indicator-label'>{intl.formatMessage({id: 'FORM.GENERAL.SAVE_BUTTON'})}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export {UserAddModalContent}
