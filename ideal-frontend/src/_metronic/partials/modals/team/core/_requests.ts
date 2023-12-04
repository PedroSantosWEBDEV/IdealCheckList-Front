import axios, {AxiosResponse} from 'axios'
import {ID} from '../../../../../_metronic/helpers'
import {ResponseTeam, Team, TeamsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TEAM_URL = `${API_URL}/api/equipes`
const GET_TEAMS_URL = `${API_URL}/api/equipes`


const getTeams = (): Promise<TeamsQueryResponse> => {
  return axios
    .get(GET_TEAMS_URL)
    .then((d: AxiosResponse<TeamsQueryResponse>) => d.data)
}

const getTeamById = (id: ID): Promise<ResponseTeam> => {
  return axios
    .get(`${TEAM_URL}/${id}`)
    .then((response: AxiosResponse<ResponseTeam>) => response.data)
}

const getTeamByInstance = (id: ID): Promise<ResponseTeam> => {
  return axios
    .get(`${TEAM_URL}/${id}/instance`)
    .then((response: AxiosResponse<ResponseTeam>) => response.data)
}


const createTeam = (team: Team): Promise<ResponseTeam> => {
  return axios
    .post(`${TEAM_URL}/novo`, team)
    .then((response: AxiosResponse<ResponseTeam>) => response.data)
}

const updateTeam = (team: Team): Promise<ResponseTeam> => {
  return axios
    .put(`${TEAM_URL}/${team.id}/editar`, team)
    .then((response: AxiosResponse<ResponseTeam>) => response.data)
}

const deleteTeam = (teamId: ID): Promise<void> => {
  return axios.delete(`${TEAM_URL}/${teamId}`).then(() => {})
}

const deleteSelectedTeams = (teamIds: Array<ID>): Promise<void> => {
  const requests = teamIds.map((id) => axios.delete(`${TEAM_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getTeams, deleteTeam, deleteSelectedTeams, getTeamById, createTeam, updateTeam,getTeamByInstance}
