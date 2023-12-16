import {ID, Response} from '../../../../../_metronic/helpers'

export type Type = {
  id?: number
  name?: string
}

export type ResponseType = {
  types: Type
  message: string
  errors: boolean
}

export type TypesQueryResponse = Response<Array<Type>>

export const initialType: Type = {
  id: 1,
  name: '',
}
