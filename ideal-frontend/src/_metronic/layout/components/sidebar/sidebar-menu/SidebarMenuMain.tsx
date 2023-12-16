/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
// import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  // debugger
  const intl = useIntl()
  const url = window.location.pathname
  return (
    <>
      
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/general/gen001.svg'
        title={intl.formatMessage({id: 'MENU.HOME'})}
        fontIcon={url ==='/dashboard'? 'bi-app-indicator': ''}
      />

      <SidebarMenuItem
        icon='/media/icons/duotune/arrows/arr085.svg'
        to='/squad-tasks'
        title={intl.formatMessage({id: 'MENU.CHECKLIST_APLICATION'})}

      />
      
      <SidebarMenuItemWithSub
        to='#'
        title={intl.formatMessage({id: 'MENU.CONFIG'})}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/coding/cod001.svg'
      >
        <SidebarMenuItem
          to='/checklist'
          title={intl.formatMessage({id: 'MENU.CHECKLISTS'})}
          hasBullet={true}
        />
        <SidebarMenuItem
          to='/unidades'
          title={intl.formatMessage({id: 'MENU.UNIT'})}
          hasBullet={true}
        />
        <SidebarMenuItem
          to='/types'
          title={intl.formatMessage({id: 'MENU.USER_TYPES'})}
          hasBullet={true}
        />
        <SidebarMenuItem
          to='/usuarios'
          title={intl.formatMessage({id: 'MENU.USERS'})}
          hasBullet={true}
          fontIcon={url ==='/usuarios'? 'bi-app-indicator': ''}
        />
      </SidebarMenuItemWithSub>
      
      
    </>
  )
}

export {SidebarMenuMain}
