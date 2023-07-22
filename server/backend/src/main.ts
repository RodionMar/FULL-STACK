import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = process.env.API_PORT || 5000;
  app.enableCors();
  // const config = app.get(ConfigService);
  // const port = config.get<number>('API_PORT');
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  })
}
bootstrap();
