// ============================ Nest ====================================
import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// ============================ Controllers and Services ====================================
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";

// ====================== Modules ============================
import { SecurityModule } from '../security/security.module';

// ========================== Repositories ==============================
import { UsersRepository } from "../users/repos/users.repository";

// ============================ Entities ====================================
import { UserEntities } from "../users/entities/user.entity";


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntities]),
    forwardRef(() => SecurityModule),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersRepository],
  exports: [AuthService]
})
export class AuthModule {};
