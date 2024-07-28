import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ required: true, unique: true, maxlength: 255 })
  email: string

  @Prop({ required: true, minlength: 8 })
  password: string

  @Prop({ default: false })
  banned: boolean

  @Prop({ default: null })
  banReason: string
}

export const UserSchema = SchemaFactory.createForClass(User)
