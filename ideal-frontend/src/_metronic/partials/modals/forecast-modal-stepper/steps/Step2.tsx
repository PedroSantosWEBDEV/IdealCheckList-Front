/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {StepProps} from '../ForecastModels'

const Step2 = ({data, updateData}: StepProps) => {
  const intl = useIntl()

  return (
    <>
      <div className='pb-5' data-kt-stepper-element='content'>
        <div className='w-100'>
          <div className='row justify-content-between'>
            <div className='col-md-8'>
              <div className='fv-row mb-3'>
                <label
                  htmlFor='investiment'
                  className='required d-flex align-items-center fs-5 fw-semibold mb-2'
                >
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.AVAILABLE_INVESTMENT'})}
                </label>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid'
                  name='investiment'
                  id='investiment'
                  value={data.projectInfo.investment}
                  onChange={(e: any) =>
                    updateData({
                      projectInfo: {
                        investment: e.target.value,
                        options_pay: data.projectInfo.options_pay,
                        quant_installments: data.projectInfo.quant_installments,
                        begin_contract: data.projectInfo.begin_contract,
                      },
                    })
                  }
                />
              </div>

              <div className='fv-row mb-3 '>
                <label
                  htmlFor='options_pay'
                  className='required d-flex align-items-center fs-5 fw-semibold mb-2'
                >
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.OPTIONS_PAY'})}
                </label>
                <label className='d-flex flex-stack mb-5 cursor-pointer justify-content-start'>
                  <span className='form-check form-check-custom form-check-solid'>
                    <input
                      className='form-check-input form-check-lg form-check-solid'
                      type='radio'
                      name='options_pay'
                      id='options_pay'
                      value={data.projectInfo.options_pay}
                      onChange={(e) =>
                        updateData({
                          projectInfo: {
                            investment: data.projectInfo.investment,
                            options_pay: e.target.value,
                            quant_installments: data.projectInfo.quant_installments,
                            begin_contract: data.projectInfo.begin_contract,
                          },
                        })
                      }
                    />
                  </span>
                  <span className='d-flex align-items-center me-2'>
                    <span className='d-flex flex-column'>
                      <span className='fw-bold text-gray-800 text-hover-primary fs-5 ms-5'>
                        Pontual
                      </span>
                    </span>
                  </span>
                </label>
                <label className='d-flex flex-stack mb-5 cursor-pointer justify-content-start'>
                  <span className='form-check form-check-custom form-check-solid'>
                    <input
                      className='form-check-input form-check-lg form-check-solid'
                      type='radio'
                      name='options_pay'
                      id='options_pay'
                      value={data.projectInfo.options_pay}
                      onChange={(e) =>
                        updateData({
                          projectInfo: {
                            investment: data.projectInfo.investment,
                            options_pay: e.target.value,
                            quant_installments: data.projectInfo.quant_installments,
                            begin_contract: data.projectInfo.begin_contract,
                          },
                        })
                      }
                    />
                  </span>
                  <span className='d-flex align-items-center me-2'>
                    <span className='d-flex flex-column'>
                      <span className='fw-bold text-gray-800 text-hover-primary fs-5 ms-5'>
                        Recorrente
                      </span>
                    </span>
                  </span>
                </label>
              </div>

              <div className='fv-row mb-3'>
                <label
                  htmlFor='quant_installments'
                  className='d-flex align-items-center fs-5 fw-semibold mb-2'
                >
                  <span>{intl.formatMessage({id: 'FORM.INPUT.NAME.QUANT_INSTALLMENYS'})}</span>
                </label>
                <input
                  type='number'
                  className='form-control form-control-lg form-control-solid'
                  name='quant_installments'
                  id='quant_installments'
                  placeholder=''
                  value={data.projectInfo.quant_installments}
                  onChange={(e) =>
                    updateData({
                      projectInfo: {
                        investment: data.projectInfo.investment,
                        options_pay: data.projectInfo.options_pay,
                        quant_installments: e.target.valueAsNumber,
                        begin_contract: data.projectInfo.begin_contract,
                      },
                    })
                  }
                />
              </div>

              <div className='fv-row mb-3'>
                <label
                  htmlFor='begin_contract'
                  className='d-flex align-items-center fs-5 fw-semibold mb-2'
                >
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.BEGIN_DATE'})}
                </label>
                <input
                  type='date'
                  className='form-control form-control-lg form-control-solid'
                  name='begin_contract'
                  id='begin_contract'
                  onChange={(e: any) =>
                    updateData({
                      projectInfo: {
                        investment: data.projectInfo.investment,
                        options_pay: data.projectInfo.options_pay,
                        quant_installments: data.projectInfo.quant_installments,
                        begin_contract: new Date(e.target.value),
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export {Step2}
