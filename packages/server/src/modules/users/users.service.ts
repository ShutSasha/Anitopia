import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './users.schema'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { RolesService } from '../roles/roles.service'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly rolesService: RolesService,
  ) {}

  async getAllUsers(): Promise<UserDocument[]> {
    const user = await this.userModel.find()

    return user
  }

  async getUserByEmail(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email }).populate('roles')

    return user
  }

  async create(dto: CreateUserDto): Promise<UserDocument> {
    const user = new this.userModel(dto)
    const role = await this.rolesService.getRoleByValue('USER')

    user.roles = [role._id]

    return user.save()
  }
}
