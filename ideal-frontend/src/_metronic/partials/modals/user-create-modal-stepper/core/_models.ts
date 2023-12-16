import {FormikProps } from 'formik'
import {ID, Response} from '../../../../../_metronic/helpers'

export type User = {
  id: number
  avatar: string
  name: string
  username: string
  email: string
  phone: string
  job_role: string
  instance_id: string
  types: Array<string>
  company: Array<string>
  administrator: number
  vacation?: boolean
  edit_costs?: boolean
  register_hours?: boolean
  password: string
  in_company_since: string
  birthday: string
  cost_hour: string
  shift_time: string
  creator_id: string 
}

export type ResponseUser = {
  users: User
  message: string
  errors: boolean
}

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  id: 1,
  username: '',
  email: '',
  job_role: '',
  phone: "",
  avatar: '',
  password: '',
  types: [],
  company: [],
  cost_hour: '0',
  administrator: 0,
  vacation: false,
  edit_costs: true,
  shift_time: '',
  register_hours: false,
  name: '',
  in_company_since: '',
  birthday: '',
  instance_id: '',
  creator_id: ''
}

export type StepProps = {
  data: User,
  updateData: (fieldsToUpdate: Partial<User>) => void,
  hasError: boolean
  props: FormikProps<User>
}