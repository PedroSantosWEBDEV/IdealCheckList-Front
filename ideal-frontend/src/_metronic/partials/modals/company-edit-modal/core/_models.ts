import {ID, Response} from '../../../../../_metronic/helpers'

export type Company = {
  id?: number
  name?: string
}

export type ResponseCompany = {
  types: Company
  message: string
  errors: boolean
}

export type CompanysQueryResponse = Response<Array<Company>>

export const initialCompany: Company = {
  id: 1,
  name: '',
}
