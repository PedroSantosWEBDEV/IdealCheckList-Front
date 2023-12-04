import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../../../../../_metronic/helpers'
import {Task, TasksQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TASK_URL = `${API_URL}/task`
const GET_TASKS_URL = `${API_URL}/tasks/query`

const tasks = {
  "data": [
    {
      "id": 1,
      "name": "31012 -Implementar tela de login",
      "project": "TaskRush"
    },
    {
      "id": 2,
      "name": "33086 - [Persoona] Kickoff",
      "project": "[Gestão de Projetos] - Verticis"
    },
    {
      "id": 3,
      "name": "32690 - Implementar listagem de projetos",
      "project": "[Comercial] - Verticis"
    },
    {
      "id": 4,
      "name": "33106 - Confecção de contratos",
      "project": "TaskRush"
    },
    {
      "id": 5,
      "name": "CRUD de pessoas",
      "status": "Entregue",
      "project": "TaskRush"
    },
  ]
}

const taskById = (id: ID) => {
  const task = tasks.data.find(obj => obj.id === id);
  return task
}

const getTasks = (query: string): Promise<TasksQueryResponse> => {
  return axios
    .get(`${GET_TASKS_URL}?${query}`)
    .then((d: AxiosResponse<TasksQueryResponse>) => d.data)
}

const getTaskById = (id: ID): Promise<Task | undefined> => {
  return axios
    .get(`${TASK_URL}/${id}`)
    .then((response: AxiosResponse<Response<Task>>) => response.data)
    .then((response: Response<Task>) => response.data)
}

const createTask = (task: Task): Promise<Task | undefined> => {
  return axios
    .put(TASK_URL, task)
    .then((response: AxiosResponse<Response<Task>>) => response.data)
    .then((response: Response<Task>) => response.data)
}

const updateTask = (task: Task): Promise<Task | undefined> => {
  return axios
    .post(`${TASK_URL}/${task.id}`, task)
    .then((response: AxiosResponse<Response<Task>>) => response.data)
    .then((response: Response<Task>) => response.data)
}

const deleteTask = (taskId: ID): Promise<void> => {
  return axios.delete(`${TASK_URL}/${taskId}`).then(() => {})
}

const deleteSelectedTasks = (taskIds: Array<ID>): Promise<void> => {
  const requests = taskIds.map((id) => axios.delete(`${TASK_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getTasks, deleteTask, deleteSelectedTasks, getTaskById, createTask, updateTask, tasks, taskById}
