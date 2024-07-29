import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Role, RoleDocument } from './roles.schema'
import { Model } from 'mongoose'
import { CreateRoleDto } from './dto/create-role.dto'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async createRole(dto: CreateRoleDto): Promise<RoleDocument> {
    const role = new this.roleModel(dto)
    return role.save()
  }

  async getRoleByValue(value: string): Promise<RoleDocument> {
    return this.roleModel.findOne({ value })
  }
}
