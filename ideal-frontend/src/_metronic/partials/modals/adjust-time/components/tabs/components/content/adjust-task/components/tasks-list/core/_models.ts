import {ID, Response} from '../../../../../../../../../../../../_metronic/helpers'

export type Task = {
  id?: ID
  name?: string
  project?: string
}

export type TasksQueryResponse = Response<Array<Task>>

export const initialTask: Task = {
  id: 1,
  name: '[Desenvolvimento] Site institucional',
  project: 'TaskRush'
}
