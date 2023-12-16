import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../helpers'
import {Summary, SummariesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const SUMMARY_URL = `${API_URL}/summary`
const GET_SUMMARIES_URL = `${API_URL}/summaries/query`

const summarys = {
  "data": [
    {
      'id': 1,
      'text': ['Criação de um site institucional de 5 páginas, estático e com uma LP para cada serviço. O site é integrado com a RD Station para todos os forms. Criação de um site institucional de 5 páginas, estático e com uma LP para cada serviço. O site é integrado com a RD Station para todos os forms.',
        'Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.',
        'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida',
        'Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus, accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh feugiat est.Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis xdis parturient montes, nascetur ridiculus mus. Pellentesque adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante. Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim. Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida']
    },
  ]
}

const summaryById = (id: ID) => {
  const summary = summarys.data.find(obj => obj.id === id);
  return summary
}

const getSummarys = (query: string): Promise<SummariesQueryResponse> => {
  return axios
    .get(`${GET_SUMMARIES_URL}?${query}`)
    .then((d: AxiosResponse<SummariesQueryResponse>) => d.data)
}

const getSummaryById = (id: ID): Promise<Summary | undefined> => {
  return axios
    .get(`${SUMMARY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Summary>>) => response.data)
    .then((response: Response<Summary>) => response.data)
}

const createSummary = (summary: Summary): Promise<Summary | undefined> => {
  return axios
    .put(SUMMARY_URL, summary)
    .then((response: AxiosResponse<Response<Summary>>) => response.data)
    .then((response: Response<Summary>) => response.data)
}

const updateSummary = (summary: Summary): Promise<Summary | undefined> => {
  return axios
    .post(`${SUMMARY_URL}/${summary.id}`, summary)
    .then((response: AxiosResponse<Response<Summary>>) => response.data)
    .then((response: Response<Summary>) => response.data)
}

const deleteSummary = (summaryId: ID): Promise<void> => {
  return axios.delete(`${SUMMARY_URL}/${summaryId}`).then(() => {})
}

const deleteSelectedSummarys = (summaryIds: Array<ID>): Promise<void> => {
  const requests = summaryIds.map((id) => axios.delete(`${SUMMARY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getSummarys, deleteSummary, deleteSelectedSummarys, getSummaryById, createSummary, updateSummary, summarys, summaryById}
