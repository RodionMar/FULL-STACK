// ============================ Nest ====================================
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// ============================ Configs ====================================
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

// ====================== Entities ============================
import { AuthEntities } from "./entities/auth.entity";


@Module({
  imports: [TypeOrmModule.forFeature([AuthEntities])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {};
