/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useAuth } from '../../modules/auth'
import { Avatar, Card, CardActionArea, CardHeader } from '@mui/material'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'

const DashboardManagerPage: FC = () => {
  const intl = useIntl()
  const greetingMessage = () => {
    //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
    let h = new Date().getHours();
    if (h <= 5) return 'Boa madrugada';
    if (h < 12) return 'Bom dia';
    if (h < 18) return 'Boa tarde';
    return 'Boa noite';
  }

  const theme = localStorage.getItem('kt_theme_mode_menu');
  const recurrent_projects = [
    {
      name: 'Aktie Now',
      cycle: 25,
      usedTimeInPercentage: 80,
    },
    {
      name: 'Persoona',
      cycle: 25,
      usedTimeInPercentage: 10,
    },
    {
      name: 'Paulo Auarek',
      cycle: 25,
      usedTimeInPercentage: 60,
    },
    {
      name: 'Rede Constrói',
      cycle: 25,
      usedTimeInPercentage: 120,
    },
    {
      name: 'Strema',
      cycle: 25,
      usedTimeInPercentage: 30,
    },
    {
      name: 'Aktie Now',
      cycle: 25,
      usedTimeInPercentage: 40,
    },
    {
      name: 'Persoona',
      cycle: 25,
      usedTimeInPercentage: 90,
    },
    {
      name: 'Paulo Auarek',
      cycle: 25,
      usedTimeInPercentage: 100,
    },
    {
      name: 'Rede Constrói',
      cycle: 25,
      usedTimeInPercentage: 10,
    },
    {
      name: 'Strema',
      cycle: 25,
      usedTimeInPercentage: 50,
    },
  ]

  const open_projects = [
    {
      name: '[Dev] CPE',
      doneInPercentage: 50,
      statusColor: 'bg-info rounded h-7px',
    },
    {
      name: '[Dev] Estrela da cozinha',
      doneInPercentage: 70,
      statusColor: 'bg-primary rounded h-7px',
    },
    {
      name: '[Dev] Construtora Terna',
      doneInPercentage: 90,
      statusColor: 'bg-success rounded h-7px',
    },
    {
      name: '[Dev] Persoona',
      doneInPercentage: 30,
      statusColor: 'bg-danger rounded h-7px',
    },
    {
      name: '[Dev] Rede Constrói',
      doneInPercentage: 60,
      statusColor: 'bg-primary rounded h-7px',
    },
  ]

  const [showMore, setShowMore] = useState(false)
  // debugger
  const { currentUser } = useAuth()
  return (
    <>
      {/* START HEADER */}
      <div className='container pt-8'>
        <div className='row mb-10'>
          <div className='col-12'>
            <div className='fs-2x fw-bold'>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row align-items-end justify-content-between bg-body pt-10 pb-15 px-3 px-md-5 mb-6 rounded'>
          <div className='col-md-8'>
            <div className='d-flex align-items-center mb-4'>
              <div className='fw-semi-bold fs-2 me-4'>
                {intl.formatMessage({ id: 'DASHBOARD.LABEL.WORKPLACE' })}
              </div>
              <span className='text-gray-600'>
                {intl.formatMessage({ id: 'DASHBOARD.LABEL.FEATURED_OF_THE_DAY' })}
              </span>
            </div>
            <div className='d-flex align-items-center'>
              <div className='symbol symbol-circle symbol-60px overflow-hidden me-3'>
                <div className='symbol-label'>
                  <img src='/media/avatars/300-3.jpg' alt='ADS Latin' className='w-100' />
                </div>
              </div>
              <div className='d-flex flex-column'>
                <p className='text-gray-900 fw-bold fs-4 mb-1'>{greetingMessage()}, {currentUser?.name}!</p>
                <span className='text-gray-600'>
                  {/* Hoje inicia o ciclo dos clientes ABC e XYZ. Em 07 dias, será a entrega do layout
                  do site ABR. */}
                  Explore as ações abaixo e descubra as possibilidades para garantir a sua produtividade e crescimento!
                </span>
              </div>
            </div>
          </div>
          <div className='col-md-4 d-flex align-items-center justify-content-between justify-content-md-end mt-10 mt-md-0'>
            <div className='text-end border-end border-gray-300 pe-5 me-10'>
              <span className='text-gray-600'>
                {intl.formatMessage({ id: 'DASHBOARD.LABEL.REGISTERED_PROJECTS' })}
              </span>
              <div className='fs-2'>256</div>
            </div>
            <div className='text-end'>
              <span className='text-gray-600'>
                {intl.formatMessage({ id: 'DASHBOARD.LABEL.TASKS_FOR_ME' })}
              </span>
              <div className='fs-2'>7</div>
            </div>
          </div>
        </div>
      </div>
      {/* END HEADER */}
      {/* {debugger} */}
      <div className='container pt-8 pb-10'>
        <div className='row mb-3'>
          <div className='col-12'>
            <div className='fs-1 fw-bold'>{intl.formatMessage({ id: 'MENU.ACTION' })}</div>
          </div>
        </div>
        <div className='row'>
        <div className='col-md-6 col-lg-6'>
          <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
            <Card className='bg-body'
            >
              <CardActionArea >
                <CardHeader
                  avatar={
                    <Avatar className='symbol symbol-50px symbol-circle '>
                      <img src={toAbsoluteUrl("/media/icons/duotune/general/gen043.svg")} />
                    </Avatar>
                  }
                  title={
                    <p className='text-gray-900 fw-bold fs-6 mb-1'>Crie um checklist.</p>
                  }
                  subheader={<span className='text-gray-600'>
                    Construa checklists do zero ou use modelos para suas auditorias.
                  </span>}
                />
              </CardActionArea>
            </Card>
          </div>
          <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
            <Card className='bg-body'
            >
              <CardActionArea >
                <CardHeader
                  avatar={
                    <Avatar className='symbol symbol-40px symbol-circle '>
                      <img alt='Pic' src={toAbsoluteUrl(`/media/avatars/300-14.jpg`)} />
                    </Avatar>
                  }
                  title={
                    <p className='text-gray-900 fw-bold fs-6 mb-1'>Crie uma unidade.</p>
                  }
                  subheader={<span className='text-gray-600'>
                    Adicione as unidades que serão avaliadas nos seus checklists.
                  </span>}
                />
              </CardActionArea>
            </Card>
          </div>
          <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
            <Card className='bg-body'
            >
              <CardActionArea >
                <CardHeader
                  avatar={
                    <Avatar className='symbol symbol-40px symbol-circle '>
                      <img alt='Pic' src={toAbsoluteUrl(`/media/avatars/300-14.jpg`)} />
                    </Avatar>
                  }
                  title={
                    <p className='text-gray-900 fw-bold fs-6 mb-1'>Crie usuários.</p>
                  }
                  subheader={<span className='text-gray-600'>
                    Traga mais pessoas da sua operação para usar o IdealChecklist!
                  </span>}
                />
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className='col-md-6 col-lg-6'>
          <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
            <Card className='bg-body'>
              <CardActionArea sx={{height: 161}}>
                <CardHeader
                  avatar={
                    <Avatar className='symbol symbol-50px symbol-circle '>
                      <img src={toAbsoluteUrl("/media/icons/duotune/general/gen043.svg")} />
                    </Avatar>
                  }
                  title={
                    <p className='text-gray-900 fw-bold fs-6 mb-1'>Aplique um checklist!</p>
                  }
                  subheader={<span className='text-gray-600'>
                    Traga mais pessoas da sua operação para usar o IdealChecklist!
                  </span>}
                />
              </CardActionArea>
            </Card>
          </div>
          <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
            <Card className='bg-body'
            >
              <CardActionArea >
                <CardHeader
                  avatar={
                    <Avatar className='symbol symbol-40px symbol-circle '>
                      <img alt='Pic' src={toAbsoluteUrl(`/media/avatars/300-14.jpg`)} />
                    </Avatar>
                  }
                  title={
                    <p className='text-gray-900 fw-bold fs-6 mb-1'>Academia IdealCheckList</p>
                  }
                />
              </CardActionArea>
            </Card>
          </div>
        </div>
        </div>
        <div className='row g-4 g-xl-9 pt-10'>
          <div className='fs-2 fw-bold'>
            {intl.formatMessage({ id: 'DASHBOARD.LABEL.ACTIVITY' })}
          </div>
          <div className='col-md-6 col-lg-4 mb-2'>
            <div className='row pt-1 pb-4 px-3 px-md-5 rounded'>
              <Card className='bg-body'>
                <CardActionArea >
                  <CardHeader
                    avatar={
                      <Avatar className='symbol symbol-50px symbol-circle '>
                        <KTSVG path="/media/icons/duotune/general/gen043.svg" className="svg-icon-muted svg-icon-3hx" />
                      </Avatar>
                    }
                    title={
                      <p className='text-gray-900 fw-bold fs-6 mb-1'>Checklist criados</p>
                    }
                    subheader={<span className='text-gray-900 fs-6'>
                      0 
                    </span>}
                  />
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-2'>
            <div className='row pt-1 pb-4 px-3 px-md-5 rounded'>
              <Card className='bg-body'>
                <CardActionArea >
                  <CardHeader
                    avatar={
                      <Avatar className='symbol symbol-40px symbol-circle '>
                        <img alt='Pic' src={toAbsoluteUrl(`/media/avatars/300-14.jpg`)} />
                      </Avatar>
                    }
                    title={
                      <p className='text-gray-900 fw-bold fs-6 mb-1'>Unidades criadas</p>
                    }
                    subheader={<span className='text-gray-900 fs-6'>
                      0
                    </span>}
                  />
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-2'>
            <div className='row pt-1 pb-4 px-3 px-md-5 rounded'>
              <Card className='bg-body'>
                <CardActionArea >
                  <CardHeader
                    avatar={
                      <Avatar className='symbol symbol-40px symbol-circle '>
                        <img alt='Pic' src={toAbsoluteUrl(`/media/avatars/300-14.jpg`)} />
                      </Avatar>
                    }
                    title={
                      <p className='text-gray-900 fw-bold fs-6 mb-1'>Usuários criados</p>
                    }
                    subheader={<span className='text-gray-900 fs-6'>
                      0
                    </span>}
                  />
                </CardActionArea>
              </Card>
            </div>
          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

          </div>
        </div>
        <div className='row bg-body py-10 px-3 px-md-5 mb-6 rounded'>
          <div className='col-lg-6 pb-10 pb-lg-0 mb-10 mb-lg-0 border-bottom border-bottom-lg-0'>
            <div className='fs-2 fw-bold mb-8'>
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.LAST_CHECKLISTS_APPLIED'})} 
            </div>
          </div>
        </div>
        {/* <div className='row justify-content-between bg-body pt-10 px-3 px-md-5 mb-6 rounded'>
          <div className='d-flex justify-content-between align-items-center mb-20'>
            <div className='fs-2 fw-bold'>
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.RECURRING_PROJECTS' })}
            </div>
            <div className='d-flex align-items-center pe-md-0'>
              <label className='label-form me-3 fs-5'>
                {intl.formatMessage({ id: 'PROJECT.LABEL.PERIOD' })}
              </label>
              <select className='form-select form-select-sm'>
                <option selected>Ciclo atual</option>
                <option value='1'>12/12 a 16/12</option>
                <option value='2'>05/12 a 09/12</option>
                <option value='3'>28/11 a 02/12</option>
              </select>
            </div>
          </div>
          {recurrent_projects.map((project) => (
            <div className='col-6 col-md-3 col-lg-2 mx-md-1 mb-20 text-center'>
              <div className='fs-3 fw-bold'>{project.name}</div>

              <div className='fw-semi-bold'>Ciclo: {project.cycle}</div>
            </div>
          ))}
        </div> */}
        {/* <div className='row justify-content-between bg-body py-10 px-3 px-md-5 mb-6 rounded'>
          <div className='col-lg-6 pb-10 pb-lg-0 mb-15 mb-lg-0 border-bottom border-bottom-lg-0'>
            <div className='fs-2 fw-bold mb-8'>
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.PROGRESS_OPEN_PROJECTS' })}
            </div>
            {open_projects.map((openProject) => (
              <div className='mb-3'>
                <span className=''>{openProject.name}</span>
                <div className='d-flex align-items-center'>
                  <div className='col-9'>
                    <div
                      className='h-7px w-100 bg-light'
                      data-bs-toggle='tooltip'
                      title='This project completed'
                    >
                      <div
                        className={openProject.statusColor}
                        role='progressbar'
                        style={{ width: `${openProject.doneInPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className='col-3 text-start ps-2'>{`${openProject.doneInPercentage}%`}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-lg-6'>
            <div className='fs-2 fw-bold mb-8'>
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.RELEVANT_ACTIVITIES' })}
            </div>
            <div className='border border-gray-200 pt-5 pb-8 px-5'>
              <div className='py-5 border-bottom border-gray-200 d-flex align-items-center'>
                <div className='symbol symbol-circle symbol-30px me-5'>
                  <img src='/media/avatars/300-3.jpg' alt='' />
                </div>
                <div className=''>
                  Pablo Germano <span className='text-primary'> entregou </span> a terefa{' '}
                  <span className='text-primary'> #2414</span>
                </div>
              </div>
              <div className='py-5 border-bottom border-gray-200 d-flex align-items-center'>
                <div className='symbol symbol-circle symbol-30px me-5'>
                  <img src='/media/avatars/300-4.jpg' alt='' />
                </div>
                <div className=''>
                  Larissa Souza <span className='text-primary'>criou</span> um novo projeto{' '}
                  <span className='text-primary'>[Dev] Site Empresa ABC</span>
                </div>
              </div>
              <div className='py-5 border-bottom border-gray-200 d-flex align-items-center'>
                <div className='symbol symbol-circle symbol-30px me-5'>
                  <img src='/media/avatars/300-4.jpg' alt='' />
                </div>
                <div className=''>
                  Larissa Souza <span className='text-primary'>fechou</span> um novo projeto{' '}
                  <span className='text-primary'>[Dev] Site Empresa ABC</span>
                </div>
              </div>
              <div className='py-5 border-bottom border-gray-200 d-flex align-items-center'>
                <div className='symbol symbol-circle symbol-30px me-5'>
                  <img src='/media/avatars/300-9.jpg' alt='' />
                </div>
                <div className=''>
                  Matheus de Melo <span className='text-primary'>entregou</span> a tarefa{' '}
                  <span className='text-primary'>#9988</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-between bg-body py-10 px-3 px-md-5 mb-6 rounded'>
          <div className='col-12'>
            <div className='fs-2 fw-bold mb-8'>
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.EXPIRING_CONTRACTS' })}
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

const DashboardManagerWrapper: FC = () => {
  return (
    <>
      <DashboardManagerPage />
    </>
  )
}

export { DashboardManagerWrapper }
