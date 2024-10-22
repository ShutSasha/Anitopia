import { AuthService } from './auth.service'
import { Body, Controller, HttpCode, HttpStatus, Post, Req, Res, UsePipes } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ValidationPipe } from '../../pipes/validation.pipe'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { Response, Request } from 'express'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() userDto: CreateUserDto, @Res() res: Response): Promise<void> {
    const { accessToken, refreshToken } = await this.authService.login(userDto)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    res.send({ message: 'Login successful', token: { accessToken } })
  }

  @UsePipes(ValidationPipe)
  @Post('/registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() userDto: CreateUserDto, @Res() res: Response): Promise<void> {
    const { accessToken, refreshToken } = await this.authService.registration(userDto)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })

    res.send({ message: 'Registration successful', tokens: { accessToken } })
  }

  @Post('/refresh')
  async refresh(@Req() req: Request, @Res() res: Response): Promise<void> {
    const refreshTokenFromReq = req.cookies['refreshToken']

    const { accessToken, refreshToken } = await this.authService.refreshTokens(refreshTokenFromReq)

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    })
    res.send({ message: 'Tokens updated', token: { accessToken } })
  }
}
