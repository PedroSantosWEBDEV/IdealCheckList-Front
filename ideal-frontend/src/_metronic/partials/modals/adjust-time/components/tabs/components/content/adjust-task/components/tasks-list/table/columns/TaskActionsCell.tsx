/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {useMutation, useQueryClient} from 'react-query'
import {useIntl} from 'react-intl'
import {MenuComponent} from '../../../../../../../../../../../../../_metronic/assets/ts/components'
import {ID, KTSVG, QUERIES} from '../../../../../../../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {useQueryResponse} from '../../core/QueryResponseProvider'
import {deleteTask, updateTask} from '../../core/_requests'

type Props = {
  id: ID
}

const TaskActionsCell: FC<Props> = ({id}) => {
  const intl = useIntl()
  const {setItemIdForUpdate} = useListView()
  const {query} = useQueryResponse()
  const queryClient = useQueryClient()

  useEffect(() => {
    MenuComponent.reinitialization()
  }, [])

  const openEditModal = () => {
    setItemIdForUpdate(id)
  }

  const deleteItem = useMutation(() => deleteTask(id), {
    // 💡 response of the mutation is passed to onSuccess
    onSuccess: () => {
      // ✅ update detail view directly
      queryClient.invalidateQueries([`${QUERIES.TASKS_LIST}-${query}`])
    },
  })

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="fs-4 me-3">0h00</div>
      <div>
        <a
          href='#'
          className='text-primary text-hover-muted'
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-end'
        >
          {intl.formatMessage({id: 'TABLE.GENERAL.LABEL.ADJUST'})}
        </a>
        {/* begin::Menu */}
        <div
          className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-state-bg-light-primary fw-bold fs-7 w-250px p-4'
          data-kt-menu='true'
        >
          <div className="d-flex align-items-center">
            <input
              type='text'
              className='form-control form-control-solid w-150px me-4 py-2'
              placeholder='Horas trabalhadas'
            />
            <a href="#" className="text-muted text-hover-primary rounded-pill me-2">
              <KTSVG path="/media/icons/duotune/general/gen041.svg" className="svg-icon-muted svg-icon-1" />
            </a>
            <a href="#" className="text-muted text-hover-primary rounded-pill">
              <KTSVG path="/media/icons/duotune/general/gen042.svg" className="svg-icon-muted svg-icon-1" />
            </a>
          </div>
        </div>
        {/* end::Menu */}
      </div>
    </div>
  )
}

export {TaskActionsCell}
