import {FC} from 'react'
import {useIntl} from 'react-intl'
import {useMutation, useQueryClient} from 'react-query'
// import {AlertBoostrapButtons, Toast} from "../../../../../../../_metronic/partials/widgets"
// import {deleteUser, closeUser, openUser} from '../../../core/_requests'
import {useQueryResponse} from '../../../core/QueryResponseProvider'
import {ID, QUERIES} from '../../../../../../../_metronic/helpers'

type Props = {
    id: ID,
    closed_at?: string | null
}

const UserListActions: FC<Props> = ({id, closed_at}) => {
    const intl = useIntl()
    const queryClient = useQueryClient()
    const {query} = useQueryResponse()

    // const confirmUserDelete = async () => {
    //     AlertBoostrapButtons
    //     .fire({
    //       title: intl.formatMessage({id: 'ALERT.LABEL.ARE_YOU_SURE'}),
    //       html: `<h5>${intl.formatMessage({id: 'ALERT.LABEL.IT_CAN_NOT_BE_UNDONE'})}<h5>`,
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonText: intl.formatMessage({id: 'GENERAL.YES_EXCLUDE'}),
    //       cancelButtonText: intl.formatMessage({id: 'GENERAL.CANECEL'}),
    //       reverseButtons: true,
    //     })
    //     .then(async (result) => {
    //       if (result.isConfirmed) {
    //         return await deleteItem.mutateAsync()
    //       }
    //     })
    // }
    
    // const deleteItem = useMutation(() => deleteUser(id), {
    // onSuccess: (response) => {
    //     Toast.fire({
    //     icon: 'success',
    //     title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_DELETE_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
    //     customClass: {
    //         popup: 'bg-light-success',
    //         title: 'text-success'
    //     },
    //     })
    //     // refetch()
    //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    // },
    // })
    
    // const closeItem = useMutation(() => closeUser(id), {
    // onSuccess: (response) => {
    //     Toast.fire({
    //     icon: 'success',
    //     title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_CLOSE_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
    //     customClass: {
    //         popup: 'bg-light-success',
    //         title: 'text-success'
    //     },
    //     })
    //     // refetch()
    //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    // },
    // onError: (error: any) => {
    //     Toast.fire({
    //     icon: 'warning',
    //     title: intl.formatMessage({id: 'ALERT.LABEL.ERROR'}),
    //     customClass: {
    //         popup: 'bg-light-danger',
    //         title: 'text-danger'
    //     },
    //     })
    // },
    // })
    
    // const openItem = useMutation(() => openUser(id), {
    // onSuccess: (response) => {
    //     Toast.fire({
    //     icon: 'success',
    //     title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_OPEN_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
    //     customClass: {
    //         popup: 'bg-light-success',
    //         title: 'text-success'
    //     },
    //     })
    //     // refetch()
    //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
    // },
    // onError: (error: any) => {
    //     Toast.fire({
    //     icon: 'warning',
    //     title: intl.formatMessage({id: 'ALERT.LABEL.ERROR'}),
    //     customClass: {
    //         popup: 'bg-light-danger',
    //         title: 'text-danger'
    //     },
    //     })
    // },
    // })

    return (
        <div className="actions">
            <a
            href='#'
            className='text-hover-primary d-flex'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            >
            <i className="bi bi-three-dots-vertical fs-1 text-dark"></i>
            </a>
            {/* begin::Menu */}
            <div
            className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-auto py-4'
            data-kt-menu='true'
            >
            {/* begin::Menu item */}
            {/* <div className='menu-item px-3'>
                {
                !closed_at

                ?

                <a className='menu-link px-3' onClick={async () => await closeItem.mutateAsync()}>
                {intl.formatMessage({id: 'USER.ACTIONS.CLOSE'})}
                </a>

                :

                <a className='menu-link px-3' onClick={async () => await openItem.mutateAsync()}>
                {intl.formatMessage({id: 'USER.ACTIONS.OPEN'})}
                </a>
                }
            </div> */}
            {/* end::Menu item */}
            
            {/* begin::Menu item */}
            {/* <div className='menu-item px-3'>
                <a className='menu-link px-3' onClick={() => {}}>
                {intl.formatMessage({id: 'USER.ACTIONS.TIMILINE'})}
                </a>
            </div> */}
            {/* end::Menu item */}
            
            {/* begin::Menu item */}
            {/* <div className='menu-item px-3'>
                <Link to={'/users/tasks'} className='menu-link px-3'>
                {intl.formatMessage({id: 'USER.ACTIONS.TASKS'})}
                </Link>
            </div> */}
            {/* end::Menu item */}

            {/* begin::Menu item */}
            <div className='menu-item px-3'>
                <a
                className='menu-link px-3'
                data-kt-user-table-filter='delete_row'
                // onClick={confirmUserDelete}
                >
                {intl.formatMessage({id: 'USER.ACTIONS.DELETE'})}
                </a>
            </div>
            {/* end::Menu item */}
            </div>
            {/* end::Menu */}
        </div>
    )
}

export {UserListActions}