// ================================ Modules ================================
import { Module } from "@nestjs/common/decorators";

// ================================ TypeORM ================================
import { TypeOrmModule } from "@nestjs/typeorm";

// ================================ Repositories ================================
import { UserRepository } from "../users/repos/users.repository";
import { AuthController } from "./auth.controller";

// ================================ Services & Conrollers ================================
import { AuthService } from "./auth.service";

import { UsersEntity } from "../users/entities/user.entity";
import { UserService } from "../users/users.service";
import { UsersModule } from "../users/users.module";


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([UsersEntity])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    AuthService,
    UserRepository
  ]
})
export class AuthModule{};