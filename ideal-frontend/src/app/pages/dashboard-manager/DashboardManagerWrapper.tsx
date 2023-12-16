/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useAuth } from '../../modules/auth'
import { Avatar, Card, CardActionArea, CardHeader, CardMedia } from '@mui/material'
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers'
import { UserModal } from '../../../_metronic/partials/modals/user-create-modal-stepper/UserModal'

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
  const [showModalStepper, setShowModalStepper] = useState<boolean>(false)
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
                      <Avatar className='symbol symbol-35px symbol-circle'>
                        <img src={toAbsoluteUrl("/media/icons/duotune/general/gen018.svg")} />
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
                <CardActionArea onClick={() => setShowModalStepper(true)}>
                  <CardHeader
                    avatar={
                      <Avatar className='symbol symbol-50px symbol-circle '>
                        <img src={toAbsoluteUrl("/media/icons/duotune/communication/com006.svg")} />
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
                <CardActionArea sx={{ height: 161 }}>
                  <div className='row'>
                    <div className='col-md-4'>
                      <CardMedia
                        component="img"
                        className='w-100 rounded float-start'
                        image={toAbsoluteUrl('/media/illustrations/dozzy-1/17.png')}
                        alt="Paella dish"
                      />
                    </div>
                    <div className='col-md-8'>
                      <CardHeader
                        title={
                          <p className='text-gray-900 fw-bold fs-6 mb-1'>Aplique um checklist!</p>
                        }
                        subheader={<span className='text-gray-600'>
                          Traga mais pessoas da sua operação para usar o IdealChecklist!
                        </span>}
                      />
                    </div>
                  </div>
                </CardActionArea>
              </Card>
            </div>
            <div className='pt-1 pb-4 px-3 px-md-5 rounded'>
              <Card className='bg-body'
              >
                <CardActionArea >
                  <CardHeader
                    avatar={
                      <Avatar className='symbol symbol-50px symbol-circle '>
                        <img src={toAbsoluteUrl("/media/icons/duotune/general/gen044.svg")} />
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
                        <KTSVG path="/media/icons/duotune/general/gen018.svg" className="svg-icon-2hx svg-icon-danger" />
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
                        <KTSVG path="/media/icons/duotune/communication/com006.svg" className="svg-icon-muted svg-icon-3hx" />
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
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.LAST_CHECKLISTS_APPLIED' })}
            </div>
          </div>
        </div>
        <UserModal userId={undefined} show={showModalStepper} handleClose={() => setShowModalStepper(false)} />
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
