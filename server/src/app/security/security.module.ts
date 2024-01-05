import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { JwtService } from "@nestjs/jwt/dist/jwt.service";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "../auth/auth.service";
import { UsersModule } from "../users/users.module";
import { JwtStrategy } from "./jwt.strategy";
import { SecurityService } from "./security.service";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.PRIVATE_KEY,
      signOptions: {expiresIn: "36000"}
    }),
  ],
  providers: [JwtStrategy, SecurityService],
  exports: [SecurityService],
})
export class SecurityModule {}