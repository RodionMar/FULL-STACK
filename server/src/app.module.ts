// ================================ Nest ================================
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// ================================ Config ================================
import dataBaseConfig from "./config/database.config";

// ================================ Modules ================================
import { AuthModule } from "./app/auth/auth.module";
import { UsersModule } from "./app/users/users.module";


@Module({
  imports: [
    TypeOrmModule.forRoot(dataBaseConfig),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {};