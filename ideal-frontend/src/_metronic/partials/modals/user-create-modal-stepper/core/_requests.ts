import axios, {AxiosResponse} from 'axios'
import {ID} from '../../../../../_metronic/helpers'
import {User, UsersQueryResponse, ResponseUser} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const USER_URL = `${API_URL}/api/usuarios`
const GET_USERS_URL = `${API_URL}/api/usuarios `

const userById = (users: UsersQueryResponse, id: number) => {
  return users.data.find((user) => user?.id === id);
};

const getUsers = (): Promise<UsersQueryResponse> => {
  return axios
    .get(GET_USERS_URL)
    .then((d: AxiosResponse<UsersQueryResponse>) => d.data)
}

const getUserById = (id: ID): Promise<ResponseUser> => {
  return axios
    .get(`${USER_URL}/${id}`)
    .then((response: AxiosResponse<ResponseUser>) => response.data)
}

const getEmailValid = (user: User): Promise<ResponseUser | undefined> => {
  return axios
    .post(`${USER_URL}/verify_email`, user)
    .then((response: AxiosResponse<ResponseUser>) => response.data)
}

const createUser = (user: User): Promise<ResponseUser | undefined> => {
  // debugger;
  let formData = new FormData();
  if(user.avatar){
  formData.append('avatar', user.avatar);
  }
  formData.append('name',user.name);  
  formData.append('username',user.username); 
  formData.append('password',user.password);  
  formData.append('email',user.email);
  formData.append('shift_time',user.shift_time);
  for (var i = 0; i < user.types.length; i++) {
    formData.append('workdays[]', user.types[i].toLocaleString());
  }
  // formData.append('workdays[]',user.workdays.toLocaleString());
  if(user.phone){
    formData.append('phone',user.phone);
    }
  formData.append('birthday',user.birthday);
  formData.append('in_company_since',user.in_company_since);
  formData.append('cost_hour',user.cost_hour);
  formData.append('job_role',user.job_role);
  formData.append('administrator',user.administrator.toLocaleString());
  return axios
    .post(`${USER_URL}/novo`,formData)
    .then((response: AxiosResponse<ResponseUser>) => response.data)
    
}

const updateUser = (user: User): Promise<ResponseUser | undefined> => {
  // axios.defaults.headers.post['content-type'] = 'multipart/form-data'
// debugger;
  let formData = new FormData();
  if(user.avatar){
  formData.append('avatar', user.avatar);
  }
  formData.append('name',user.name);  
  formData.append('username',user.username); 
  if(user.password){
    formData.append('password',user.password);
    }
  formData.append('email',user.email);
  if(user.shift_time){
  formData.append('shift_time',user.shift_time);
  }
  for (var i = 0; i < user.types.length; i++) {
    formData.append('workdays[]', user.types[i].toLocaleString());
  }
  if(user.phone){
  formData.append('phone',user.phone);
  }
  if(user.birthday){
  formData.append('birthday',user.birthday);
  }
  if(user.in_company_since){
  formData.append('in_company_since',user.in_company_since);
  }
  if(user.cost_hour){
  formData.append('cost_hour',user.cost_hour);
  }
  if(user.job_role){
  formData.append('job_role',user.job_role);
  }
  formData.append('administrator',user.administrator.toLocaleString());
  // formData.append('creator_id',user.creator_id);
  // formData.append('instance_id',user.instance_id);
  return axios
    .post(`${USER_URL}/${user.id}/editar`, formData)
    .then((response: AxiosResponse<ResponseUser>) => response.data)
}

const deleteUser = (userId: ID): Promise<void> => {
  return axios.delete(`${USER_URL}/${userId}/excluir`).then(() => {})
}

const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
  const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {
  getUsers,
  deleteUser,
  userById,
  deleteSelectedUsers,
  getUserById,
  createUser,
  updateUser,
  getEmailValid,
}
