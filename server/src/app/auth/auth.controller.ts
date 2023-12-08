// ============================ Nest ====================================
import { Controller, Request, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';

// ============================ Services ====================================
import { AuthService } from "./auth.service";

// ============================ Guards ====================================
import { LocalAuthGuard } from "./guards/local-auth.guard";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
  };
};
