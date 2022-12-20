import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export default function swaggerInit(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Qkly Assessment challenge')
    .setDescription('An api for Qkly onboarding challenge')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const customOptions: SwaggerCustomOptions = {
    useGlobalPrefix: false,
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Qkly Assement API',
  };

  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey, methodKey) => methodKey,
    include: [],
  };

  const document = SwaggerModule.createDocument(
    app,
    config,
    swaggerDocumentOptions,
  );

  SwaggerModule.setup('/api/docs', app, document, customOptions);
}
