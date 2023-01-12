import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: 'http://localhost:3000',
    origin: [
      'https://marc-etiennebonnet.github.io/CVV2/',
      'http://localhost:3000',
      'http://localhost:3002',
    ],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200,
  });
  await app.listen(3001);
}
bootstrap();
