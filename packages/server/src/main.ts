import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT || 3030

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))
}
bootstrap()
