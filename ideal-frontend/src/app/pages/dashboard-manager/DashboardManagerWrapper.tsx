/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { useAuth } from '../../modules/auth'

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
      <div className='container pt-8 pb-10'>
        <div className='row bg-body pt-10 pb-4 px-3 px-md-5 mb-6 rounded'>
          <div className='fs-1 fw-bold mb-8'>
            {intl.formatMessage({ id: 'MENU.ACTION' })}
          </div>
        </div>
        <div className='row bg-body pt-10 pb-4 px-3 px-md-5 mb-6 rounded'>
          <div className='fs-2 fw-bold mb-8'>
            {intl.formatMessage({ id: 'DASHBOARD.LABEL.MYSCHEDULE' })}
          </div>
          
        </div>
        <div className='row g-6 g-xl-9'>
          <div className='fs-2 fw-bold'>
            {intl.formatMessage({ id: 'DASHBOARD.LABEL.PROJECTS_I_LEAD' })}
          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

          </div>
          <div className='col-md-6 col-lg-4 mb-8'>

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
              {intl.formatMessage({ id: 'DASHBOARD.LABEL.HR_HIGHLIGHTS_OF' })} Janeiro
            </div>
            <div className='content'>
              <div
                className={`resume overflow-hidden transition-all ${showMore ? 'mh-1000px overflow-scroll' : 'mh-200px'
                  }`}
              >
                <div className='py-5 border-gray-200 d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className='symbol  symbol-40px symbol-circle'>
                      <img src='/media/avatars/300-3.jpg' />
                    </div>

                    <div className='ms-4'>
                      <a className='fs-6 fw-bold text-gray-900 text-hover-primary mb-2'>
                        Matheus de Melo
                      </a>
                      <div className='fw-semibold fs-7 text-muted'>Aniversário - 13/09</div>
                    </div>
                  </div>
                </div>

                <div className='py-5 border-gray-200 d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className='symbol  symbol-40px symbol-circle'>
                      <img src='/media/avatars/300-2.jpg' />
                    </div>

                    <div className='ms-4'>
                      <a className='fs-6 fw-bold text-gray-900 text-hover-primary mb-2'>
                        Solagen Maria
                      </a>
                      <div className='fw-semibold fs-7 text-muted'>Aniversário - 19/09</div>
                    </div>
                  </div>
                </div>

                <div className='py-5 border-gray-200 d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className='symbol  symbol-40px symbol-circle'>
                      <img src='/media/avatars/300-5.jpg' />
                    </div>

                    <div className='ms-4'>
                      <a className='fs-6 fw-bold text-gray-900 text-hover-primary mb-2'>
                        Rogério Campos
                      </a>
                      <div className='fw-semibold fs-7 text-muted'>
                        Em 15/09 faz 1 ano de empresa
                      </div>
                    </div>
                  </div>
                </div>

                <div className='py-5 border-gray-200 d-flex align-items-center'>
                  <div className='d-flex align-items-center'>
                    <div className='symbol  symbol-40px symbol-circle'>
                      <img src='/media/avatars/300-6.jpg' />
                    </div>

                    <div className='ms-4'>
                      <a className='fs-6 fw-bold text-gray-900 text-hover-primary mb-2'>
                        Alice Garcia{' '}
                      </a>
                      <div className='fw-semibold fs-7 text-muted'>
                        Em 15/09 faz 06 meses de empresa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='read-more text-center text-gray-200 mt-4'>
                <span
                  className='text-primary cursor-pointer'
                  onClick={() => {
                    setShowMore(!showMore)
                  }}
                >
                  {showMore
                    ? intl.formatMessage({ id: 'GENERAL.SEE_LESS' })
                    : intl.formatMessage({ id: 'GENERAL.SEE_MORE' })}
                  <i className='bi bi-chevron-expand text-primary'></i>
                </span>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='card card-flush '>
              <div className='card-header d-flex align-items-start p-1'>
                <h3 className='card-title flex-column'>
                  <span className='fs-2 fw-bold'>
                    {intl.formatMessage({ id: 'DASHBOARD.LABEL.TEAM_REGISTERED_HOURS' })}
                  </span>

                  <span className='text-gray-400 mt-1 fw-semibold fs-6'>Ultimos 7 dias</span>
                </h3>
                <div className='card-toolbar'>
                  <label className='label-form me-3 fs-5'>
                    {intl.formatMessage({ id: 'PROJECT.LABEL.PERIOD' })}
                  </label>
                  <select className='form-select form-select-sm'>
                    <option selected>Hoje</option>
                    <option value='1'>Últimos 7 dias</option>
                    <option value='2'>Últimos 30 dias</option>
                    <option value='3'>Este mês</option>
                    <option value='4'>Mês passado</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='card-body pt-6'>
              <div className='tab-content'>
                <div
                  className='tab-pane fade show active'
                  id='kt_stats_widget_16_tab_1'
                  role='tabpanel'
                  aria-labelledby='#kt_stats_widget_16_tab_link_1'
                >
                  <div className='table-responsive'>
                    <table className='table table-row-dashed align-middle gs-0 gy-3 my-0'>
                      <thead>
                        <tr className='fs-7 fw-bold text-gray-400 border-bottom-0'>
                          <th className='p-0 pb-3 min-w-150px text-start'>MEMBRO</th>
                          <th className='p-0 pb-3 min-w-100px text-end pe-13'>%</th>
                          <th className='p-0 pb-3 w-125px text-end pe-7'>GRÁFICO</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='symbol symbol-50px me-3'>
                                <img src='/media/avatars/300-5.jpg' alt='' />
                              </div>
                              <div className='d-flex justify-content-start flex-column'>
                                <a
                                  href=''
                                  className='text-gray-800 fw-bold text-hover-primary mb-1 fs-6'
                                >
                                  Marcelo Ramos
                                </a>
                                <span className='text-gray-400 fw-semibold d-block fs-7'>
                                  Desenvolvedor
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='text-end pe-13'>
                            <span className='text-gray-600 fw-bold fs-6'>78%</span>
                          </td>
                          <td className='text-end pe-0'>

                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='symbol symbol-50px me-3'>
                                <img src='/media/avatars/300-7.jpg' />
                              </div>
                              <div className='d-flex justify-content-start flex-column'>
                                <a
                                  href=''
                                  className='text-gray-800 fw-bold text-hover-primary mb-1 fs-6'
                                >
                                  Rubens Lemos
                                </a>
                                <span className='text-gray-400 fw-semibold d-block fs-7'>
                                  Desenvolvedor
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='text-end pe-13'>
                            <span className='text-gray-600 fw-bold fs-6'>91%</span>
                          </td>
                          <td className='text-end pe-0'>

                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='symbol symbol-50px me-3'>
                                <img src='/media/avatars/300-6.jpg' />
                              </div>
                              <div className='d-flex justify-content-start flex-column'>
                                <a
                                  href=''
                                  className='text-gray-800 fw-bold text-hover-primary mb-1 fs-6'
                                >
                                  Jordana Alves
                                </a>
                                <span className='text-gray-400 fw-semibold d-block fs-7'>
                                  Social Media
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='text-end pe-13'>
                            <span className='text-gray-600 fw-bold fs-6'>99%</span>
                          </td>
                          <td className='text-end pe-0'>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className='d-flex align-items-center'>
                              <div className='symbol symbol-50px me-3'>
                                <img src='/media/avatars/300-8.jpg' />
                              </div>
                              <div className='d-flex justify-content-start flex-column'>
                                <a
                                  href=''
                                  className='text-gray-800 fw-bold text-hover-primary mb-1 fs-6'
                                >
                                  Márcia Araújo
                                </a>
                                <span className='text-gray-400 fw-semibold d-block fs-7'>
                                  Financeiro
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className='text-end pe-13'>
                            <span className='text-gray-600 fw-bold fs-6'>83%</span>
                          </td>
                          <td className='text-end pe-0'>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-between bg-body pt-10 px-3 px-md-5 mb-6 rounded'>
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
        </div>
        <div className='row justify-content-between bg-body py-10 px-3 px-md-5 mb-6 rounded'>
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
        </div>
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
