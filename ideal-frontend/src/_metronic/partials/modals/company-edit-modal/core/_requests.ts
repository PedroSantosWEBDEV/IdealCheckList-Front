import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../helpers'
import {Company, CompanysQueryResponse, ResponseCompany} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const COMPANY_URL = `${API_URL}/api/companys`
const GET_COMPANYS_URL = `${API_URL}/api/companys`

const getCompany = (): Promise<CompanysQueryResponse> => {
  return axios
    .get(GET_COMPANYS_URL)
    .then((d: AxiosResponse<CompanysQueryResponse>) => d.data)
}

const getCompanyById = (id: ID): Promise<ResponseCompany> => {
  return axios
    .get(`${COMPANY_URL}/${id}`)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}
const getEmailValid  = (company: Company): Promise<ResponseCompany> => {
  return axios
    .post(`${COMPANY_URL}/verify_email`, company)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const createCompany = (company: Company): Promise<ResponseCompany> => {
  return axios
    .post(`${COMPANY_URL}/novo`, company)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const updateCompany = (company: Company): Promise<ResponseCompany> => {
  return axios
    .put(`${COMPANY_URL}/${company.id}/editar`, company)
    .then((response: AxiosResponse<ResponseCompany>) => response.data)
}

const deleteCompany = (companyId: ID): Promise<void> => {
  return axios.delete(`${COMPANY_URL}/${companyId}`).then(() => {})
}

const deleteSelectedCompanys = (companyIds: Array<ID>): Promise<void> => {
  const requests = companyIds.map((id) => axios.delete(`${COMPANY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getCompany, deleteCompany, deleteSelectedCompanys,getEmailValid, getCompanyById, createCompany, updateCompany}
