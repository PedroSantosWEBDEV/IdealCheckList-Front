/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useMutation, useQueryClient} from 'react-query'
import {useIntl} from 'react-intl'
import {MenuComponent} from '../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../_metronic/helpers'
import {useQueryResponse} from '../../../core/QueryResponseProvider'
// import {deleteUser, closeUser, openUser} from '../../../core/_requests'
// import {AlertBoostrapButtons, Toast} from '../../../../../../../_metronic/partials/widgets'
import {UserListActions} from '../../components/actions/UserListActions'

type Props = {
  id: ID
  closed_at?: string | null
}

const UserActionsCell: FC<Props> = ({id, closed_at}) => {
  const intl = useIntl()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  // const confirmUserDelete = async () => {
  //   AlertBoostrapButtons
  //   .fire({
  //     title: intl.formatMessage({id: 'ALERT.LABEL.ARE_YOU_SURE'}),
  //     html: `<h5>${intl.formatMessage({id: 'ALERT.LABEL.IT_CAN_NOT_BE_UNDONE'})}<h5>`,
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: intl.formatMessage({id: 'GENERAL.YES_EXCLUDE'}),
  //     cancelButtonText: intl.formatMessage({id: 'GENERAL.CANECEL'}),
  //     reverseButtons: true,
  //   })
  //   .then(async (result) => {
  //     if (result.isConfirmed) {
  //       return await deleteItem.mutateAsync()
  //     }
  //   })
  // }

  // const deleteItem = useMutation(() => deleteUser(id), {
  //   onSuccess: (response) => {
  //     Toast.fire({
  //       icon: 'success',
  //       title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_DELETE_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
  //       customClass: {
  //         popup: 'bg-light-success',
  //         title: 'text-success'
  //       },
  //     })
  //     // refetch()
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  // })

  // const closeItem = useMutation(() => closeUser(id), {
  //   onSuccess: (response) => {
  //     Toast.fire({
  //       icon: 'success',
  //       title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_CLOSE_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
  //       customClass: {
  //         popup: 'bg-light-success',
  //         title: 'text-success'
  //       },
  //     })
  //     // refetch()
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  //   onError: (error: any) => {
  //     Toast.fire({
  //       icon: 'warning',
  //       title: intl.formatMessage({id: 'ALERT.LABEL.ERROR'}),
  //       customClass: {
  //         popup: 'bg-light-danger',
  //         title: 'text-danger'
  //       },
  //     })
  //   },
  // })
  
  // const openItem = useMutation(() => openUser(id), {
  //   onSuccess: (response) => {
  //     Toast.fire({
  //       icon: 'success',
  //       title: intl.formatMessage({id: 'ALERT.LABEL.SUCCESS_OPEN_ITEM'}, {item: intl.formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})}),
  //       customClass: {
  //         popup: 'bg-light-success',
  //         title: 'text-success'
  //       },
  //     })
  //     // refetch()
  //     queryClient.invalidateQueries([`${QUERIES.USERS_LIST}-${query}`])
  //   },
  //   onError: (error: any) => {
  //     Toast.fire({
  //       icon: 'warning',
  //       title: intl.formatMessage({id: 'ALERT.LABEL.ERROR'}),
  //       customClass: {
  //         popup: 'bg-light-danger',
  //         title: 'text-danger'
  //       },
  //     })
  //   },
  // })

  return (
    <>
      <UserListActions id={id} closed_at={closed_at} />
    </>
  )
}

export {UserActionsCell}
