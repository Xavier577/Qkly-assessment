import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerInit from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('NEST_APPLICATION');

  swaggerInit(app);

  const configService = app.get(ConfigService);

  const PORT = configService.get('PORT');

  await app.listen(PORT);

  const appUrl = await app.getUrl();

  logger.log(`listening on ${appUrl}`);
}

bootstrap();
