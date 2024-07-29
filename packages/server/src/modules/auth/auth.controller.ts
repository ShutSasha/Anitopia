import { AuthService } from './auth.service'
import { Body, Controller, HttpCode, HttpStatus, Post, Res, UsePipes } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ValidationPipe } from '../../pipes/validation.pipe'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { Response } from 'express'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() userDto: CreateUserDto, @Res() res: Response): Promise<void> {
    const { accessToken, refreshToken } = await this.authService.login(userDto)

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict', // or 'lax', depending on your CSRF protection strategy
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    res.send({ message: 'Login successful', tokens: { accessToken, refreshToken } })
  }

  @UsePipes(ValidationPipe)
  @Post('/registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() userDto: CreateUserDto, @Res() res: Response): Promise<void> {
    const { accessToken, refreshToken } = await this.authService.registration(userDto)

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    res.send({ message: 'Registration successful', tokens: { accessToken, refreshToken } })
  }

  @Post('/refresh')
  async refresh(@Body('refreshToken') token: string): Promise<Record<string, string>> {
    return this.authService.refreshTokens(token)
  }
}
