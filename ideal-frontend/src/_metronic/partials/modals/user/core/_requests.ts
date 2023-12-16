import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../helpers'
import {User, UsersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/user`
const GET_USERS_URL = `${API_URL}/users/query`

const users = {
  "data": [
    {
      "id": 1,
      "name": 'Alice Garcia', 
      "avatar": '/media/avatars/300-6.jpg',
      "email": "alice@taskrush.com.br",
      "job": "CS",
      "access": '1',
    },
    {
      "id": 2,
      "name": 'Márcio Campos', 
      "email": "marcio@taskrush.com.br",
      "access": '1',
      "job": "Gestor",
      "state": 'danger',
    },
    {
      "id": 3,
      "avatar": '/media/avatars/300-1.jpg',
      "name": 'Afonso Padilha',
      "email": 'afonso@taskrush.com.br',
      "job": "Desenvolvedor",
      "access": '3',
    },
    {
      "id": 4,
      "avatar": '/media/avatars/300-25.jpg',
      "name": 'João Guilherme',
      "email": 'jguilherme@taskrush.com.br',
      "job": "Líder técnico",
      "access": '2',
    },
    {
      "id": 5,
      "state": 'warning',
      "name": 'Mikaela Abreu',
      "email": 'mikaela@taskrush.com.br',
      "job": "Designer",
      "access": '2',
    },{
      "id": 6,
      "state": 'info',
      "name": 'Nélio Alvez',
      "email": 'nelio@taskrush.com.br',
      "job": "Designer",
      "access": '1'
    },
  ]
}

const userById = (id: ID) => {
  const user = users.data.find(obj => obj.id === id);
  return user
}

const getUsers = (query: string): Promise<UsersQueryResponse> => {
  return axios
    .get(`${GET_USERS_URL}?${query}`)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<User | undefined> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const createUser = (user: User): Promise<User | undefined> => {
  return axios
    .put(USER_URL, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const updateUser = (user: User): Promise<User | undefined> => {
  return axios
    .post(`${USER_URL}/${user.id}`, user)
    .then((response: AxiosResponse<Response<User>>) => response.data)
    .then((response: Response<User>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUsers, deleteUser, deleteSelectedUsers, getUserById, createUser, updateUser, users, userById}
