type RoleValues = 'USER' | 'ADMIN'

export interface IRole {
  _id: string
  value: RoleValues
  description: string
  __v: number
}
