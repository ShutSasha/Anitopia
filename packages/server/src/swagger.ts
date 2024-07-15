import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerPath = 'api';

export const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
