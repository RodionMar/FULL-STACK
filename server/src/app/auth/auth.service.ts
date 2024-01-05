// ================================ Nest ================================
import { Injectable } from "@nestjs/common/decorators";

// ================================ Repositories ================================
import { UserRepository } from "../users/repos/users.repository";

// ================================ DTO ================================
import { TokenDto } from "../security/dtos/token.dto";
import { UserSessionDto } from "../users/dto/user-session.dto";

// ================================ Services ================================
import { SecurityService } from "../security/security.service";

// ================================ BCrypt ================================
import * as bcrypt from 'bcrypt';
import { ConflictException, NotFoundException, UnauthorizedException } from "@nestjs/common/exceptions";
import { SignInDto } from "./dto/sign-in.dto";



@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    readonly securityService: SecurityService
  ) {};

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.getUserByEmail(email);
  
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
  
    return null;
  };

  // ================================ SignUp ================================
  async signUp(user: UserSessionDto): Promise<TokenDto> {
      const existingUser = await this.userRepository.getUserByEmail(user.email);

      if(existingUser) {
        throw new ConflictException("User with this email already exists");      
      } 
        await this.userRepository.createUser(user);
        return await this.securityService.generateToken(user);
  };

  // ================================ SignIn ================================
  async signIn(userData: SignInDto): Promise<TokenDto> {
    const { email, password } = userData;
    const user = await this.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return await this.securityService.generateToken(user);
  }

};