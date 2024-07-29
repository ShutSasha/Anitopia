import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User, UserDocument } from './users.schema'
import { ValidationPipe } from '../../pipes/validation.pipe'
import { RolesGuard } from '../roles/roles.guard'
import { Roles } from '../roles/roles-auth.decorator'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get all users ' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('USER')
  @UseGuards(RolesGuard)
  @Get()
  getAllUser(): Promise<UserDocument[]> {
    return this.usersService.getAllUsers()
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/:email')
  getUser(@Param('email') email: string): Promise<UserDocument> {
    return this.usersService.getUserByEmail(email)
  }

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateUserDto): Promise<UserDocument> {
    return this.usersService.create(dto)
  }
}
