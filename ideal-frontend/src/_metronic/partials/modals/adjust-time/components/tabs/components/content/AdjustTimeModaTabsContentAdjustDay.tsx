import {useIntl} from 'react-intl'

const AdjustTimeModaTabsContentAdjustDay = () => {
    const intl = useIntl()

    return (
        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
            <div className="fs-5 fw-semi-bold">{intl.formatMessage({id: 'TIME_TRAKING.MODAL.LABEL.SELECT_OPTION_TO_JUSTIFY_DATE'})}</div>
            <div className="pt-4">
                <select className="form-select form-select-solid" aria-label="Select example">
                    <option>{intl.formatMessage({id: 'GENERAL.SELECT'})}</option>
                    <option value="1">Médico</option>
                    <option value="2">Dentista</option>
                    <option value="3">Esquecimento</option>
                    <option value="4">Feriado</option>
                    <option value="5">Trabalho além do horário</option>
                </select>
            </div>
        </div>
    )
}

export {AdjustTimeModaTabsContentAdjustDay}