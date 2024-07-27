import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from '../users/users.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@dev-cluster.vmryai6.mongodb.net/?retryWrites=true&w=majority&appName=dev-cluster`,
    ),
    UsersModule,
  ],
})
export class AppModule {}
