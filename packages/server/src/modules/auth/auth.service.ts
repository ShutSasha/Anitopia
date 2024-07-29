import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UserDocument } from '../users/users.schema'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto): Promise<Record<string, string>> {
    const user = await this.validateUser(userDto)
    return this.generateTokens(user)
  }

  async registration(userDto: CreateUserDto): Promise<Record<string, string>> {
    const candidate = await this.usersService.getUserByEmail(userDto.email)

    if (candidate) throw new HttpException('User exist already', HttpStatus.BAD_REQUEST)

    const hashPassword = await bcrypt.hash(userDto.password, +process.env.PASSWORD_SALT)

    const user = await this.usersService.create({ ...userDto, password: hashPassword })

    return this.generateTokens(user)
  }

  async refreshTokens(refreshToken: string): Promise<Record<string, string>> {
    try {
      const payload = this.jwtService.verify(refreshToken, { secret: process.env.JWT_REFRESH_SECRET })

      const user = await this.usersService.getUserByEmail(payload.email)

      if (!user) throw new UnauthorizedException()

      return this.generateTokens(user)
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token')
    }
  }

  private async generateTokens(user: UserDocument): Promise<Record<string, string>> {
    const payload = { email: user.email, id: user._id, roles: user.roles }

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m', secret: process.env.JWT_ACCESS_SECRET })

    const refreshToken = this.jwtService.sign(payload, { expiresIn: '30d', secret: process.env.JWT_REFRESH_SECRET })

    return { accessToken, refreshToken }
  }

  private async validateUser(userDto: CreateUserDto): Promise<UserDocument> {
    const user = await this.usersService.getUserByEmail(userDto.email)

    const passwordEquals = await bcrypt.compare(userDto.password, user.password)

    if (user && passwordEquals) return user

    throw new UnauthorizedException({ message: 'Incorrect email or password' })
  }
}
