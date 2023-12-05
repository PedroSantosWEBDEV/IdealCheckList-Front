/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Languages} from './Languages'
import {UserModal} from '../../modals/user-create-modal-stepper/UserModal'
import {TypeModal} from '../../modals/type-edit-modal/TypeModal'
import { useAuth } from '../../../../app/modules/auth'
import { isNotEmpty, toAbsoluteUrl } from '../../../helpers'
import { getUserById } from '../../modals/user-create-modal-stepper/core/_requests'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  const [showModalStepper, setShowModalStepper] = useState<boolean>(false)
  const [showModalType, setShowModalType] = useState<boolean>(false)
  const openEditModal = () => {
    // debugger;
    setShowModalStepper(true)
  }
  const openEditModalComapany = () => {
    setShowModalType(true)
  }
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
  const TemaAtual = window.localStorage.getItem('kt_theme_mode_value') || ''

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            {avatar && TemaAtual === 'dark' ? (<img alt='Logo' src={isNotEmpty(avatar) && avatar !== 'null' ? avatar : toAbsoluteUrl('/media/svg/files/blank-image-dark.svg')} />) : (<img alt='Logo' src={isNotEmpty(avatar) && avatar !== 'null' ? avatar : toAbsoluteUrl('/media/svg/files/blank-image.svg')} />)}
            
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {currentUser?.name} 
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>{currentUser?.type_id === 1 ? 'Admin' : ''}</span>
            </div>
            <a href='#' className='fw-bold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <a className='menu-link px-5' onClick={openEditModal}>
          Meu Perfil
          {/* {intl.formatMessage({id: 'TABLE.GENERAL.LABEL.EDIT'})} */}
        </a>
        <UserModal
          show={showModalStepper}
          handleClose={() => setShowModalStepper(false)}
          userId={currentUser?.id}
        />
      </div>

      {currentUser?.type_id === 1 && (
        <div className='menu-item px-5'>
          <a className='menu-link px-5' onClick={openEditModalComapany}>
            <span className='menu-text'>Conta da Empresa</span>
            {/* <span className='menu-badge'>
              <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
            </span> */}
          </a>
        </div>
      )}
      <TypeModal
              show={showModalType}
              handleClose={() => setShowModalType(false)}
              typeId={currentUser?.instance_id}
            />

      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='left-start'
        data-kt-menu-flip='bottom'
      >
        <a href='#' className='menu-link px-5'>
          <span className='menu-title'>Configurações Gerais</span>
          <span className='menu-arrow'></span>
        </a>

        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Usuários
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Tipos de Tarefas
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Feriados
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Modelo de Projetos
            </a>
          </div>

          <div className='menu-item px-3'>
            <Link to='/configs' className='menu-link d-flex flex-stack px-5'>
              Configurações do TaskRush
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='View your statements'
              ></i>
            </Link>
          </div>

          <div className='separator my-2'></div>

          <div className='menu-item px-3'>
            <div className='menu-content px-3'>
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input w-30px h-20px'
                  type='checkbox'
                  value='1'
                  defaultChecked={true}
                  name='notifications'
                />
                <span className='form-check-label text-muted fs-7'>Notificações</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <Languages />

      <div className='menu-item px-5 my-1'>
        <Link to='/crafted/account/settings' className='menu-link px-5'>
          Configurar notificações
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sair
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
