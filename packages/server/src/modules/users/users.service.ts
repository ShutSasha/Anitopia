import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './users.schema'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUserByEmail(email: string): Promise<User> {
    const user = this.userModel.findOne({ email })

    if (!user) throw new HttpException('user not found by this email', HttpStatus.NOT_FOUND)

    return user
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel(dto)
    return user.save()
  }
}
