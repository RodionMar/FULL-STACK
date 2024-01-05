import { Controller, UseGuards } from "@nestjs/common/decorators/core";
import { Body, Get, Post, Request } from "@nestjs/common/decorators/http";
import { UsersEntity } from "../users/entities/user.entity";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { UserSessionDto } from "../users/dto/user-session.dto";
import { JwtAuthGuard } from "../security/guards/jwt-auth.guard";
import { ValidationPipe } from "@nestjs/common/pipes";
import { SignInDto } from "./dto/sign-in.dto";


@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){};

  @Post("signUp")
  async signUp(@Body(new ValidationPipe()) data: UserSessionDto) {
    return this.authService.signUp(data);
  }

  @Post("signIn")
  async signIn(@Body(new ValidationPipe()) data: SignInDto) {
    return this.authService.signIn(data);
  }
}