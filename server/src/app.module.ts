// ============================ Nest ====================================
import { Module } from "@nestjs/common";

// ============================ Modules ==================================
import { AuthModule } from "./app/auth/auth.module";
import { DeedsModule } from "./app/deeds/deeds.module";

// ============================ TypeORM ==================================
import { TypeOrmModule } from "@nestjs/typeorm";

// ============================ Configs ==================================
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./config/database.config";


@Module({
  imports: [
    AuthModule, 
    DeedsModule,
    // ConfigModule.forRoot({
    //   isGlobal: true
    // }),
    TypeOrmModule.forRoot(databaseConfig),
  ],
})

export class AppModule{};
