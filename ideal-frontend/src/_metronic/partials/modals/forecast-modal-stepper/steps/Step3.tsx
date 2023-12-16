/* eslint-disable jsx-a11y/anchor-is-valid */
import {useIntl} from 'react-intl'
import {StepProps} from '../ForecastModels'

const Step3 = ({data, updateData, hasError}: StepProps) => {
  const intl = useIntl()

  return (
    <>
      <div className='pb-5' data-kt-stepper-element='content'>
        <div className='w-100'>
          {/*begin::Form Group */}
          <div className='row mb-4 justify-content-between'>
            <div className='col-6'>
              <label
                htmlFor='purchase_materials'
                className='d-flex align-items-center fs-5 fw-semibold mb-2'
              >
                <span className='required'>
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.PURCHASE_MATERIALS'})}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.PURCHASE_MATERIALS'})}
                ></i>
              </label>
            </div>
            <div className='col-6'>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='purchase_materials'
                id='purchase_materials'
                placeholder=''
                value={data.projectCost.purchase_materials}
                onChange={(e: any) =>
                  updateData({
                    projectCost: {
                      purchase_materials: e.target.value,
                      rental_equips: data.projectCost.rental_equips,
                      subcontractors: data.projectCost.subcontractors,
                      fees: data.projectCost.fees,
                      other_cost: data.projectCost.other_cost,
                    },
                  })
                }
              />
              {!data.projectCost.purchase_materials && hasError && (
                <div className='fv-plugins-message-container'>
                  <div
                    data-field='purchase_materials'
                    data-validator='notEmpty'
                    className='fv-help-block'
                  >
                    {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Form Group */}

          {/*begin::Form Group */}
          <div className='row mb-4 justify-content-between'>
            <div className='col-6'>
              <label
                htmlFor='subcontractors'
                className='d-flex align-items-center fs-5 fw-semibold mb-2'
              >
                <span className='required'>
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.SUBCONTRACTORS'})}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.SUBCONTRACTORS'})}
                ></i>
              </label>
            </div>
            <div className='col-6'>
              <input
                className='form-control form-control-lg form-control-solid'
                name='subcontractors'
                id='subcontractors'
                placeholder=''
                value={data.projectCost.subcontractors}
                onChange={(e) =>
                  updateData({
                    projectCost: {
                      purchase_materials: data.projectCost.purchase_materials,
                      rental_equips: data.projectCost.rental_equips,
                      subcontractors: e.target.value,
                      fees: data.projectCost.fees,
                      other_cost: data.projectCost.other_cost,
                    },
                  })
                }
              />
              {!data.projectCost.subcontractors && hasError && (
                <div className='fv-plugins-message-container'>
                  <div
                    data-field='subcontractors'
                    data-validator='notEmpty'
                    className='fv-help-block'
                  >
                    {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Form Group */}

          {/*begin::Form Group */}
          <div className='row mb-4 justify-content-between'>
            <div className='col-md-6 col-6'>
              <label
                htmlFor='rental_equips'
                className='d-flex align-items-center fs-5 fw-semibold mb-2'
              >
                <span className='required'>
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.RENTAL_EQUIPS'})}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.RENTAL_EQUIPS'})}
                ></i>
              </label>
            </div>
            <div className='col-md-6 col-6'>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='rental_equips'
                id='rental_equips'
                placeholder=''
                value={data.projectCost.rental_equips}
                onChange={(e) =>
                  updateData({
                    projectCost: {
                      purchase_materials: data.projectCost.purchase_materials,
                      rental_equips: e.target.value,
                      subcontractors: data.projectCost.subcontractors,
                      fees: data.projectCost.fees,
                      other_cost: data.projectCost.other_cost,
                    },
                  })
                }
              />
              {!data.projectCost.rental_equips && hasError && (
                <div className='fv-plugins-message-container'>
                  <div
                    data-field='rental_equips'
                    data-validator='notEmpty'
                    className='fv-help-block'
                  >
                    {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Form Group */}
           {/*begin::Form Group */}
           <div className='row mb-4 justify-content-between'>
            <div className='col-md-6 col-6'>
              <label
                htmlFor='fees'
                className='d-flex align-items-center fs-5 fw-semibold mb-2'
              >
                <span className='required'>
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.FEES'})}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.FEES'})}
                ></i>
              </label>
            </div>
            <div className='col-md-6 col-6'>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='fees'
                id='fees'
                placeholder=''
                value={data.projectCost.fees}
                onChange={(e) =>
                  updateData({
                    projectCost: {
                      purchase_materials: data.projectCost.purchase_materials,
                      rental_equips: data.projectCost.rental_equips,
                      subcontractors: data.projectCost.subcontractors,
                      fees: e.target.value,
                      other_cost: data.projectCost.other_cost,
                    },
                  })
                }
              />
              {!data.projectCost.rental_equips && hasError && (
                <div className='fv-plugins-message-container'>
                  <div
                    data-field='fees'
                    data-validator='notEmpty'
                    className='fv-help-block'
                  >
                    {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Form Group */}

           {/*begin::Form Group */}
           <div className='row mb-4 justify-content-between'>
            <div className='col-6'>
              <label
                htmlFor='other_cost'
                className='d-flex align-items-center fs-5 fw-semibold mb-2'
              >
                <span className='required'>
                  {intl.formatMessage({id: 'FORM.INPUT.NAME.OTHER_COST'})}
                </span>
                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title={intl.formatMessage({id: 'FORM.INPUT.TOOLTIP.OTHER_COST'})}
                ></i>
              </label>
            </div>
            <div className='col-6'>
              <input
                type='text'
                className='form-control form-control-lg form-control-solid'
                name='other_cost'
                id='other_cost'
                placeholder=''
                value={data.projectCost.other_cost}
                onChange={(e: any) =>
                  updateData({
                    projectCost: {
                      purchase_materials: data.projectCost.purchase_materials,
                      rental_equips: data.projectCost.rental_equips,
                      subcontractors: data.projectCost.subcontractors,
                      fees: data.projectCost.fees,
                      other_cost: e.target.value,
                    },
                  })
                }
              />
              {!data.projectCost.other_cost && hasError && (
                <div className='fv-plugins-message-container'>
                  <div
                    data-field='other_cost'
                    data-validator='notEmpty'
                    className='fv-help-block'
                  >
                    {intl.formatMessage({id: 'FORM.INPUT.VALIDATION.REQUIRED'})}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*end::Form Group */}
        </div>
      </div>
    </>
  )
}

export {Step3}
