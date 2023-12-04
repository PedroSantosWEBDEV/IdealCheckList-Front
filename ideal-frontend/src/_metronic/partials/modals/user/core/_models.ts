import {ID, Response} from '../../../../helpers'

export type User = {
  id?: ID
  avatar?: any
  name?: string
  email?: string
  access?: string
  job?: string
  state?: string
}

export type Data = {
  id?: ID
  avatar?: any
  name?: string
  email?: string
  access?: string
  job?: string
  state?: string
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  id: 1,
  avatar: '/media/avatars/300-6.jpg',
  name: 'Emma Smith',
  email: 'e.smith@kpmg.com.au',
  access: '1',
}
