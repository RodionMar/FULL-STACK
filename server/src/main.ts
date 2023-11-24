// ====================== Nest ============================
import { NestFactory } from '@nestjs/core';

// ====================== Modules ============================
import { AppModule } from './app.module';

// ====================== Swagger ============================
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";


const start = async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;

  const swagger = new DocumentBuilder()
    .setTitle("Nest App")
    .setDescription("Full-Stack Diary")
    .setVersion("0.0.1")
    .addTag("Diary")
    .build();

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup("swagger", app, document);
  app.listen(port, () => console.log(`Server started from ${port}`));
}
start();
