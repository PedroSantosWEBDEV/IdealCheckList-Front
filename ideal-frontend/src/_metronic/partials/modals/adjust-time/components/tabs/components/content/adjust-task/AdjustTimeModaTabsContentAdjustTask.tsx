import {useIntl} from 'react-intl'
import {TasksListWrapper} from "./components/tasks-list/TasksList"

const AdjustTimeModaTabsContentAdjustTask = () => {
    const intl = useIntl()

    return (
        <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1"
            role="tabpanel"
        >
            <div className="fs-5 fw-semi-bold">{intl.formatMessage({id: 'TIME_TRAKING.MODAL.LABEL.TIME_TO_ADJUST_ON_DAY'})} <span className="fw-bold">+2h03</span></div>
            <TasksListWrapper />
        </div>
    )
}

export {AdjustTimeModaTabsContentAdjustTask}