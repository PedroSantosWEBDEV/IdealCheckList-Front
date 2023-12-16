import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../helpers'
import {Type, TypesQueryResponse, ResponseType} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TYPE_URL = `${API_URL}/api/tipos`
const GET_TYPES_URL = `${API_URL}/api/tipos`

const getType = (): Promise<TypesQueryResponse> => {
  return axios
    .get(GET_TYPES_URL)
    .then((d: AxiosResponse<TypesQueryResponse>) => d.data)
}

const getTypeById = (id: ID): Promise<ResponseType> => {
  return axios
    .get(`${TYPE_URL}/${id}`)
    .then((response: AxiosResponse<ResponseType>) => response.data)
}
const getEmailValid  = (type: Type): Promise<ResponseType> => {
  return axios
    .post(`${TYPE_URL}/verify_email`, type)
    .then((response: AxiosResponse<ResponseType>) => response.data)
}

const createType = (type: Type): Promise<ResponseType> => {
  return axios
    .post(`${TYPE_URL}/novo`, type)
    .then((response: AxiosResponse<ResponseType>) => response.data)
}

const updateType = (type: Type): Promise<ResponseType> => {
  return axios
    .put(`${TYPE_URL}/${type.id}/editar`, type)
    .then((response: AxiosResponse<ResponseType>) => response.data)
}

const deleteType = (typeId: ID): Promise<void> => {
  return axios.delete(`${TYPE_URL}/${typeId}`).then(() => {})
}

const deleteSelectedTypes = (typeIds: Array<ID>): Promise<void> => {
  const requests = typeIds.map((id) => axios.delete(`${TYPE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getType, deleteType, deleteSelectedTypes,getEmailValid, getTypeById, createType, updateType}
