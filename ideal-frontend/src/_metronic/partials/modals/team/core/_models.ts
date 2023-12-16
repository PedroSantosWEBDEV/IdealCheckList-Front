
import { ID,Response } from "../../../../helpers"
import { User } from "../../user-create-modal-stepper/core/_models"


// export type User ={
//   name: string
//   id: number
//   leader_id: number
//   leader: string
//   avatar: string
//   username: string
//   email: string
//   phone: string
//   job_role: string
//   instance_id: string
// }

export type Team = {
  id?: number
  avatar?: string
  name?: string
  user: Array<User>
  user_id?: Array<number>
  team?: string
  creator_id?: number
  instance_id?: number
  team_id?: number
  workingon?: string
  project?: string
  tasks?: number
  leader?: string
  leader_id?: number
  job_role?: string
}


export type ResponseTeam = {
  teams: Team
  message: string
  errors: boolean
}

export type TeamsQueryResponse = Response<Array<Team>>

export const initialTeam: Team = {
  "id": 1,
  "avatar": "avatars/300-17.jpg",
  "name": "AndrÃ© Brunelli",
  "team": 'CEO',
  "workingon": "Ajustes de SEO",
  "project": "Canopus",
  "tasks": 5,
  "leader": '',
  "user": []
}

export type StepProps = {
  data: Team,
  updateData: (fieldsToUpdate: Partial<Team>) => void,
  hasError: boolean
}