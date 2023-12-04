/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Task} from '../../core/_models'

type Props = {
  task: Task
}

const TaskNameCell: FC<Props> = ({task}) => {
  console.log(task)
  return (
    <div className='d-flex flex-column justify-content-center'>
      <span className='text-uppercase text-semi-bold text-gray-600 fs-7'>{task.project}</span>
      <p className='text-gray-900 fs-5 mb-0'>
        {task.name}
      </p>
    </div>
  )
} 

export {TaskNameCell}
