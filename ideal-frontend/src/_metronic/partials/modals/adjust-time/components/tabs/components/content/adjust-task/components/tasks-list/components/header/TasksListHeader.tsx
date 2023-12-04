import {TasksListSearchComponent} from './TasksListSearchComponent'

const TasksListHeader = () => {
  return (
    <div className='card-header justify-content-end min-h-unset border-0 p-0 pt-8 pb-4 pb-md-0'>
      <TasksListSearchComponent />
    </div>
  )
}

export {TasksListHeader}
