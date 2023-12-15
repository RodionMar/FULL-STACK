// ================================ Nest ================================
import { NestFactory } from "@nestjs/core";

// ================================ Modules ================================
import { AppModule } from "./app.module";


async function App() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.log(`App listen at ${port}`);
  });
};
App();