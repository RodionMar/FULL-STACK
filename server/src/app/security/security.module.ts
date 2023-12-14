import * as dotenv from "dotenv";
dotenv.config();

// ========================== Nest ==========================
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

// ========================== Jwt ==========================
import { JwtStrategy } from "./jwt.strategy";

// ========================== Services ==========================
import { SecurityService } from "./security.service";

// ================================= Entities ================================
import { UserEntities } from "../users/entities/user.entity";

// ================================== Repository ==================================
import { UsersRepository } from "../users/repos/users.repository";


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntities]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: { expiresIn: "360000s" },
    }),
  ],
  controllers: [],
  providers: [SecurityService, JwtStrategy, UsersRepository],
  exports: [SecurityService],
})
export class SecurityModule {}