import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('ONGs and Pets')
    .setDescription('The ONGs and Pets API for registering ONGs and Pets that have been rescued')
    .setVersion('1.0')
    .addTag('users')
    .addTag('login')
    .addTag('ongs')
    .addTag('pets')
    .addBearerAuth({type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Enter JWT token',
    in: 'header',},'JWT-auth')
    .addTag('donations')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);
}

bootstrap();

