// @ts-nocheck
import {Column} from 'react-table'
import {useIntl} from 'react-intl'
import {UserActionsCell} from './UserActionsCell'
import {UserNameCell} from './UserNameCell'
import {UserCompanyCell} from './UserCompanyCell'
import {UserTypeCell} from './UserTypeCell'
import {UserStatusCell} from './UserStatusCell'
import {UserOpenedTasksCell} from './UserOpenedTasksCell'
import {UserCustomHeader} from './UserCustomHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserCustomHeader tableProps={props} title={useIntl().formatMessage({id: 'TABLE.GENERAL.LABEL.CLIENT'})} className='min-w-125px pt-0' />,
    id: 'company',
    Cell: ({...props}) => <UserCompanyCell companyName={props.data[props.row.index].client.name} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title={useIntl().formatMessage({id: 'TABLE.GENERAL.LABEL.USER'})} className='min-w-125px pt-0' />,
    id: 'name',
    Cell: ({...props}) => <UserNameCell name={props.data[props.row.index].name} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title={useIntl().formatMessage({id: 'TABLE.GENERAL.LABEL.USER_TYPE'})} className='min-w-125px pt-0 text-center' />
    ),
    id: 'type',
    Cell: ({...props}) => <UserTypeCell type={props.data[props.row.index].type} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title={useIntl().formatMessage({id: 'TABLE.GENERAL.LABEL.STATUS'})} className='min-w-125px pt-0 text-center' />
    ),
    id: 'status',
    Cell: ({...props}) => <UserStatusCell closed_at={props.data[props.row.index].closed_at} begin_date={props.data[props.row.index].begin_date} end_date={props.data[props.row.index].end_date} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title={useIntl().formatMessage({id: 'TABLE.GENERAL.LABEL.OPENED_TASKS'})} className='min-w-125px pt-0 text-center' />
    ),
    id: 'opened_tasks_number',
    Cell: ({...props}) => <UserOpenedTasksCell openedTasksNumber={props.data[props.row.index].opened_tasks_number} />,
  },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} className='text-end pt-0' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell is_open={props.data[props.row.index].is_open} id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
