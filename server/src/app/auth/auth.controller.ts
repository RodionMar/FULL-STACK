// ============================ Nest ====================================
import { Controller, Request, Post, UseGuards, Get, ValidationPipe, UsePipes, Body } from "@nestjs/common";

// ============================ Services ====================================
import { AuthService } from "./auth.service";

// ============================ DTO ====================================
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { TokenDto } from "../security/dtos/token.dto";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {};

  @Post("/signUp")
  @UsePipes(new ValidationPipe())
  async signUp(@Body() createUserDto: SignUpDto) {
    return await this.authService.signUp(createUserDto);
  };

  @Post("/login")
  @UsePipes(new ValidationPipe())
  async logIn(@Body() userSignIn: SignInDto): Promise<TokenDto> {
    return await this.authService.login(userSignIn);
  }
};
