

export interface ProjectBasic {
  company_name: string
  user_manager: string
  project_summary: string
}

export type ProjectInfo = {
  investment: string
  options_pay: string
  quant_installments: number
  begin_contract: Date
}

export type ProjectCost = {
  purchase_materials: string
  rental_equips: string
  subcontractors: string
  fees: string
  other_cost: string
}

export interface CreateUserData {
  projectBasic: ProjectBasic
  projectInfo: ProjectInfo
  projectCost: ProjectCost
}

export const defaultCreateUserData: CreateUserData = {
  projectBasic: {company_name: '', user_manager: '',project_summary: '' },
  projectInfo: {investment: '', options_pay: '', quant_installments: 0, begin_contract: new Date()},
  projectCost: {purchase_materials: '',rental_equips: '', subcontractors: '', fees: '', other_cost: ''}
}

export type StepProps = {
  data: CreateUserData
  updateData: (fieldsToUpdate: Partial<CreateUserData>) => void
  hasError: boolean
}
