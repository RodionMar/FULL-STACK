import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SignUpDto } from "../auth/dto/sign-up.dto";
import { TokenDto } from "./dtos/token.dto";

@Injectable()
export class SecurityService {
  constructor(
    private jwtService: JwtService
  ) {}

  private readonly secretKey = process.env.PRIVATE_KEY;

  async generateToken(userData: SignUpDto): Promise<TokenDto> {
    const payload = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      tag: userData,
      isActive: true
    };
    
    return {
      token: this.jwtService.sign(payload)
    };
  }
}