import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'user email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string

  @ApiProperty({ example: 'VERY_STRONG_PASSWORD', description: 'user password' })
  @IsString({ message: 'Should be a string' })
  @IsNotEmpty()
  @Length(8, 24, { message: 'No less than 8 and no more than 24' })
  readonly password: string
}
