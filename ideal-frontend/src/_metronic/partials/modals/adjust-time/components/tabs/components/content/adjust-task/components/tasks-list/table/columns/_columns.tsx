// @ts-nocheck
import {Column} from 'react-table'
import {useIntl} from 'react-intl'
import {TaskNameCell} from './TaskNameCell'
import {TaskActionsCell} from './TaskActionsCell'
import {TaskCustomHeader} from './TaskCustomHeader'
import {Task} from '../../core/_models'

const tasksColumns: ReadonlyArray<Column<Task>> = [
  {
    Header: (props) => <TaskCustomHeader tableProps={props} />,
    id: 'name',
    Cell: ({...props}) => <TaskNameCell task={props.data[props.row.index]} />,
  },
  {
    Header: (props) => (
      <TaskCustomHeader tableProps={props} />
    ),
    id: 'actions',
    Cell: ({...props}) => <TaskActionsCell status={props.data[props.row.index].id} />,
  }
]

export {tasksColumns}
