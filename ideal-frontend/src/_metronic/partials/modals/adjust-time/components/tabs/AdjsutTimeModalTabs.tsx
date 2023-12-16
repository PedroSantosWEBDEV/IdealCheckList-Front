import {AdjustTimeModalTabsNav} from "./components/AdjustTimeModalTabsNav"
import {AdjustTimeModaTabsContentAdjustTask} from "./components/content/adjust-task/AdjustTimeModaTabsContentAdjustTask"
import {AdjustTimeModaTabsContentAdjustDay} from "./components/content/AdjustTimeModaTabsContentAdjustDay"

const AdjsutTimeModalTabs = () => {
    return (
        <>
            <AdjustTimeModalTabsNav />
            <div className="tab-content pt-5">
                <AdjustTimeModaTabsContentAdjustTask />
                <AdjustTimeModaTabsContentAdjustDay />
            </div>
        </>
    )
}

export {AdjsutTimeModalTabs}