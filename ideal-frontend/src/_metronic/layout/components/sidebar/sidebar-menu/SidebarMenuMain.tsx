/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
// import {KTSVG} from '../../../../helpers'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({id: 'MENU.TITLE.MANAGEMENT'})}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='#'
        title={intl.formatMessage({id: 'MENU.TEAMS_AND_USERS'})}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/communication/com014.svg'
      >
          <SidebarMenuItem to='/teams' title={intl.formatMessage({id: 'MENU.TEAMS'})} hasBullet={true} />
          <SidebarMenuItem to='/users' title={intl.formatMessage({id: 'MENU.USERS'})} hasBullet={true} />
      </SidebarMenuItemWithSub>

      <SidebarMenuItem icon='/media/icons/duotune/abstract/abs027.svg' to='/projects' title={intl.formatMessage({id: 'MENU.PROJECTS'})} />

      {/* <SidebarMenuItem icon='/media/icons/duotune/art/art002.svg' to='/sprints' title={intl.formatMessage({id: 'MENU.SPRINTS'})} />
      <SidebarMenuItem icon='/media/icons/duotune/art/art002.svg' to='/squad-tasks' title={intl.formatMessage({id: 'MENU.SQUARD_TASKS'})} />
      
      <SidebarMenuItem icon='/media/icons/duotune/general/gen013.svg' to='/gantt' title={intl.formatMessage({id: 'MENU.SCHEDULE'})} />
      <SidebarMenuItem icon='/media/icons/duotune/art/art002.svg' to='/time-tracking' title={intl.formatMessage({id: 'MENU.TIME_TRACKING'})} />
      <SidebarMenuItem icon='/media/icons/duotune/graphs/gra010.svg' to='/reports' title={intl.formatMessage({id: 'MENU.REPORTS'})} />
      <SidebarMenuItem icon='/media/icons/duotune/general/gen014.svg' to='/calendar' title={intl.formatMessage({id: 'MENU.CALENDAR'})} />
      <SidebarMenuItem icon='/media/icons/duotune/communication/com011.svg' to='/tickets' title={intl.formatMessage({id: 'MENU.TICKETS'})} /> */}
      
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({id: 'MENU.TITLE.CMS'})}</span>
        </div>
      </div>
      
      <SidebarMenuItem icon='/media/icons/duotune/communication/com014.svg' to='/clients' title={intl.formatMessage({id: 'MENU.CLIENTS'})} />
      <SidebarMenuItem icon='/media/icons/duotune/files/fil025.svg' to='/contracts' title={intl.formatMessage({id: 'MENU.CONTRACTS'})} />

      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>{intl.formatMessage({id: 'MENU.TITLE.CULTURE'})}</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='#'
        title={intl.formatMessage({id: 'MENU.WIKI'})}
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen005.svg'
      >
      <SidebarMenuItem to='/wiki' title={intl.formatMessage({id: 'MENU.POST'})} hasBullet={true}/>
      <SidebarMenuItem to='/wiki/wiki-config' title={intl.formatMessage({id: 'MENU.SKETCH'})} hasBullet={true} />
      <SidebarMenuItem to='/category' title={intl.formatMessage({id: 'MENU.CONFIG_CATEGORY'})} hasBullet={true} />
      <SidebarMenuItem to='/tags' title={intl.formatMessage({id: 'MENU.CONFIG_TAGS'})} hasBullet={true} />
      </SidebarMenuItemWithSub>
      
      
    </>
  )
}

export {SidebarMenuMain}
