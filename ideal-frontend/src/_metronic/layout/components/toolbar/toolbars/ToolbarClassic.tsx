/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import { usePageData } from '../../../core'
import {CreateAppModal} from '../../../../partials'
import { KTSVG } from '../../../../helpers'
import { Button } from '@mui/material'

const ToolbarClassic = () => {
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)
  const {pageButtons} = usePageData()

  return (
    <div className='d-flex align-items-center gap-2 gap-lg-3'>
        {
          pageButtons
          &&  
          pageButtons.map((button, key) => (
            <Button key={key} type='button' href={button.link} className={button.class} disabled={button.disabled} onClick={button.onClick} >
              {
              button.icon
              &&
              <KTSVG path={button.icon} className='svg-icon svg-icon-2 svg-icon-gray-800' />
              }
              <div style={{whiteSpace: 'nowrap'}}>{button.text}</div>
              {
              button.icon2
              &&
              <i className={button.icon2}></i>
              }
            </Button>
          ))
        }
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </div>
  )
}

export {ToolbarClassic}
