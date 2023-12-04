import {ID, Response} from '../../../../../_metronic/helpers'

export type Company = {
  id?: ID
  name?: string
  responsible?: string
  email?: string
  phone?: string
  total_users?: number
  total_projects: number
  plan_cost?: number
  observation?: string
  active?: boolean
  creator_id?:number 
}

export type ResponseCompany = {
  companys: Company
  message: string
  errors: boolean
}

export type CompanysQueryResponse = Response<Array<Company>>

export const initialCompany: Company = {
  id: 1,
  email: '',
  phone: "",
  total_projects: 0
}
