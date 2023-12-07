// ====================== Nest ============================
import { NestFactory } from "@nestjs/core";

// ====================== Modules ============================
import { AppModule } from "./app.module";


async function App() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  await app.listen(port, () => console.log(`Server started from ${port}`));
};

App();
