import { Controller } from "@nestjs/common/decorators/core";
import { Body, Post } from "@nestjs/common/decorators/http";
import { UsersEntity } from "../users/entities/user.entity";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto/sign-up.dto";
import { UserSessionDto } from "../users/dto/user-session.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ){};

  @Post("signUp")
  async signUp(@Body() data: UserSessionDto) {
    return this.authService.signUp(data);
  }

}