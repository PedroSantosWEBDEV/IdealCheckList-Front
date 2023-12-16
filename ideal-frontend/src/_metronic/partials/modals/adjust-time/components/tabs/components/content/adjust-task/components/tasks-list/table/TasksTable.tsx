import {useMemo} from 'react'
import {useTable, Row} from 'react-table'
import {CustomRow} from './columns/CustomRow'
import {useQueryResponseData, useQueryResponseLoading} from '../core/QueryResponseProvider'
import {tasksColumns} from './columns/_columns'
import {Task} from '../core/_models'
import {TasksListLoading} from '../components/loading/TasksListLoading'
import {TasksListPagination} from '../components/pagination/TasksListPagination'
import {KTCardBody} from '../../../../../../../../../../../helpers'

const TasksTable = () => {
  const tasks = useQueryResponseData()
  const isLoading = useQueryResponseLoading()
  const data = useMemo(() => tasks, [tasks])
  const columns = useMemo(() => tasksColumns, [])
  const {getTableProps, getTableBodyProps, headers, rows, prepareRow} = useTable({
    columns,
    data,
  })

  return (
    <KTCardBody className='p-4 pt-0 mh-350px overflow-scroll'>
      <div className='table-responsive'>
        <table
          id='kt_table_tasks'
          className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer tab-pane fade show active'
          {...getTableProps()}
        >
          <tbody className='text-gray-600 fw-bold' {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row: Row<Task>, i) => {
                prepareRow(row)
                return <CustomRow row={row} key={`row-${i}-${row.id}`} />
              })
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className='d-flex text-center w-100 align-content-center justify-content-center'>
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <TasksListPagination />
      {isLoading && <TasksListLoading />}
    </KTCardBody>
  )
}

export {TasksTable}
