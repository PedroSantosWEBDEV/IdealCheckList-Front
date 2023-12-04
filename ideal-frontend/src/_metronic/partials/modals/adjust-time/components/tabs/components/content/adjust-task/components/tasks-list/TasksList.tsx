import {ListViewProvider} from './core/ListViewProvider'
import {QueryRequestProvider} from './core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
import {TasksTable} from './table/TasksTable'
import {TasksListHeader} from './components/header/TasksListHeader'
import {KTCard} from '../../../../../../../../../../helpers'

const TasksList = () => {
  
  return (
    <>
      <KTCard>
        <TasksListHeader />
        <TasksTable />
      </KTCard>
    </>
  )
}

const TasksListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      <ListViewProvider>
        <TasksList />
      </ListViewProvider>
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {TasksListWrapper}
