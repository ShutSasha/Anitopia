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
    credentials: true,
    origin: true,
  })

  app.use(cookieParser())

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup(swaggerPath, app, document)

  await app.listen(PORT)
}
bootstrap()
