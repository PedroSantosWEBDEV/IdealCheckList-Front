import {FC} from "react"
import {KTSVG} from "../../../helpers"
import {useIntl} from 'react-intl'
import {AdjsutTimeModalTabs} from "./components/tabs/AdjsutTimeModalTabs"

type Props = {
    handleClose: () => void | undefined
}

const AdjustTimeModalContent: FC<Props> = ({handleClose}) => {
    const intl = useIntl()
    
    return (
        <div className="h-600px">
            <div className='modal-header border-0'>
                <div className="col-md-11">
                    <div className="fw-bold fs-2">{intl.formatMessage({id: 'TIME_TRAKING.MODAL.LABEL.ADJUST_TIME'})} 5 set 2022</div>
                </div>
                <div className="col-md-1 d-flex justify-content-end align-items-center">
                    <button className='btn btn-sm btn-icon btn-active-color-primary h-auto ms-4' onClick={handleClose}>
                      <KTSVG className='svg-icon-2x svg-icon-gray-800' path='/media/icons/duotune/arrows/arr061.svg' />
                    </button>
                </div>
            </div>
            <div className='modal-body'>
                <AdjsutTimeModalTabs />
            </div>
        </div>
    )
}

export {AdjustTimeModalContent}