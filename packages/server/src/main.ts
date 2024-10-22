import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app/app.module'
import { SwaggerModule } from '@nestjs/swagger'
import { config, swaggerPath } from './swagger'
import * as cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 5000

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api')

  app.enableCors({
    // allows get cookies, headers, etc from requests others servers
    credentials: true,

    // allows make requests to this server from any server/client source
    // origin: true - good for development
    //but for production better to use smth like that - origin: ['https://your-allowed-domain.com'],
    origin: true,
  })

  app.use(cookieParser())

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(swaggerPath, app, document)

  await app.listen(PORT)
}
bootstrap()
