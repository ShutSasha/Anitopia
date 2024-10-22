import { IRole } from '../role/role.type'

export interface IUser {
  _id: string
  email: string
  password: string
  banned: string
  banReason: string | null
  roles: IRole[]
  __v: number
}
