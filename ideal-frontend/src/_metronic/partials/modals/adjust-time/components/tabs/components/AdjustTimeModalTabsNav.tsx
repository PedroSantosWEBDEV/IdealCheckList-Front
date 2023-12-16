import {useIntl} from "react-intl"

const AdjustTimeModalTabsNav = () => {
    const intl = useIntl()

    return (
        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-bottom-2 fs-5 fw-bolder flex-nowrap">
            <li className="nav-item">
                <a
                className="nav-link text-active-primary active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1"
                >
                {intl.formatMessage({id: 'TIME_TRAKING.MODAL.LABEL.ADJUST_TASKS'})}
                </a>
            </li>
            <li className="nav-item">
                <a
                className="nav-link text-active-primary"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2"
                >
                {intl.formatMessage({id: 'TIME_TRAKING.MODAL.LABEL.ADJUST_DAY'})}
                </a>
            </li>
        </ul>
    )
}

export {AdjustTimeModalTabsNav}