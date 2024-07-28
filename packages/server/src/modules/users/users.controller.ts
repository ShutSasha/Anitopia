import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { User } from './users.schema'
import { ValidationPipe } from '../../pipes/validation.pipe'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/:email')
  getUser(@Param('email') email: string): Promise<User> {
    return this.usersService.getUserByEmail(email)
  }

  @ApiOperation({ summary: 'User creation' })
  @ApiResponse({ status: 200, type: User })
  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto)
  }
}
