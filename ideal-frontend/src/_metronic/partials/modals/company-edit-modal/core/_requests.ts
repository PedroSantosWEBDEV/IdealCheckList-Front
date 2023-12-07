import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../helpers'
import {Company, CompanysQueryResponse, ResponseCompany} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TYPE_URL = `${API_URL}/api/empresas`
const GET_TYPES_URL = `${API_URL}/api/empresas`

const getCompany = (): Promise<CompanysQueryResponse> => {
  return axios
    .get(GET_TYPES_URL)
    .then((d: AxiosResponse<CompanysQueryResponse>) => d.data)
}

const getCompanyById = (id: ID): Promise<ResponseCompany> => {
  return axios
    .get(`${TYPE_URL}/${id}`)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}
const getEmailValid  = (type: Company): Promise<ResponseCompany> => {
  return axios
    .post(`${TYPE_URL}/verify_email`, type)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const createCompany = (type: Company): Promise<ResponseCompany> => {
  return axios
    .post(`${TYPE_URL}/novo`, type)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const updateCompany = (type: Company): Promise<ResponseCompany> => {
  return axios
    .put(`${TYPE_URL}/${type.id}/editar`, type)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const deleteCompany = (typeId: ID): Promise<void> => {
  return axios.delete(`${TYPE_URL}/${typeId}`).then(() => {})
}

const deleteSelectedCompanys = (typeIds: Array<ID>): Promise<void> => {
  const requests = typeIds.map((id) => axios.delete(`${TYPE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getCompany, deleteCompany, deleteSelectedCompanys,getEmailValid, getCompanyById, createCompany, updateCompany}
