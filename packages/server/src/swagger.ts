import { DocumentBuilder } from '@nestjs/swagger'

export const swaggerPath = 'api'

export const config = new DocumentBuilder()
  .setTitle('Anitopia api')
  .setDescription('Here stores anitopia api')
  .setVersion('1.0')
  .build()
