// ============================ Nest ====================================
import { Module } from "@nestjs/common";
import { PassportModule } from '@nestjs/passport';

// ============================ Configs ====================================
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

// ====================== Entities ============================
import { AuthEntities } from "./entities/auth.entity";

// ====================== Modules ============================
import { UsersModule } from "../users/users.module";

// ====================== Strategies ============================
import { LocalStrategy } from "./strategies/local.strategy";


@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {};
