import clsx from 'clsx'
import {isNotEmpty, KTSVG, toAbsoluteUrl} from '../../../helpers'
import {HeaderNotificationsMenu, HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../partials'
import {useLayout} from '../../core'
import { useAuth } from '../../../../app/modules/auth'
import { useEffect, useState } from 'react'
import { getUserById, getUsers } from '../../../partials/modals/user-create-modal-stepper/core/_requests'

const itemClass = 'ms-1 ms-lg-3'
const btnClass =
  'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
const userAvatarClass = 'symbol-35px symbol-md-40px'
const btnIconClass = 'svg-icon-1'

const Navbar = () => {
  const {config} = useLayout()
  const {currentUser} = useAuth()
  const TemaAtual = window.localStorage.getItem('kt_theme_mode_value') || ''
  const [avatar,setAvatar] = useState('')
  useEffect(() => {
    // console.log("Entrou Aqui")
    (async () => {
      await getUserById(currentUser?.id).then((response)=>{
          // debugger;
          setAvatar(response.users.avatar)
      })
    })();
  },[currentUser?.id])
  
  return (
    <div className='app-navbar flex-shrink-0'>
      <div className={clsx('app-navbar-item align-items-stretch', itemClass)}>
        <Search />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
          className={btnClass}
        >
          <KTSVG path='/media/icons/duotune/general/gen007.svg' className={btnIconClass} />
        </div>
        <HeaderNotificationsMenu />
      </div>

      {/* <div className={clsx('app-navbar-item', itemClass)}>
        <div className={clsx('position-relative', btnClass)} id='kt_drawer_chat_toggle'>
          <KTSVG path='/media/icons/duotune/communication/com012.svg' className={btnIconClass} />
          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink' />
        </div>
      </div> */}

      <div className={clsx('app-navbar-item', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx('btn-active-light-primary btn-custom')} />
      </div>

      <div className={clsx('app-navbar-item', itemClass)}>
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger="{default: 'click'}"
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          {avatar && TemaAtual === 'dark' ? (
              <img
                alt='Logo'
                src={
                  isNotEmpty(avatar) && avatar !== 'null'
                    ? avatar
                    : toAbsoluteUrl('/media/svg/files/blank-image-dark.svg')
                }
              />
            ) : (
              <img
                alt='Logo'
                src={
                  isNotEmpty(avatar) && avatar !== 'null'
                    ? avatar
                    : toAbsoluteUrl('/media/svg/files/blank-image.svg')
                }
              />
            )}
        </div>
        <HeaderUserMenu />
      </div>

      {/* {config.app?.header?.default?.menu?.display && (
        <div className='app-navbar-item d-lg-none ms-2 me-n3' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-35px h-35px'
            id='kt_app_header_menu_toggle'
          >
            <KTSVG path='/media/icons/duotune/text/txt001.svg' className={btnIconClass} />
          </div>
        </div>
      )} */}
    </div>
  )
}

export {Navbar}
