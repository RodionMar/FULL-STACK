// ============================ Nest ====================================
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { HttpException } from "@nestjs/common";

// ====================== Hashing ============================
import * as bcrypt from 'bcrypt';

// ====================== DTO ============================
import { SignUpDto } from "./dto/sign-up.dto";
import { SignInDto } from "./dto/sign-in.dto";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { TokenDto } from "../security/dtos/token.dto";

// ====================== Repositories ============================
import { UsersRepository } from "../users/repos/users.repository";

// ====================== Services ============================
import { SecurityService } from "../security/security.service";
import { HttpStatus } from "@nestjs/common/enums";


@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly securityService: SecurityService
  ) {};

  // ====================== SignUp ============================
  public async signUp(dto: SignUpDto) {
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    // Check if a user with the specified email already exists in the database.
    // If the user exists, throw a BadRequestException with an error message.
    const existEmail = await this.usersRepository.getUserByEmail(dto.email);
    if(existEmail) throw new BadRequestException("This email alredy exist!");

    const existTag = await this.usersRepository.getUserByTag(dto.tag);
    if(existTag) throw new BadRequestException("This tag alredy exist!");


    const userForDB: CreateUserDto = {
      email: dto.email,
      password: hashedPassword,
      firstName: dto.firstName,
      lastName: dto.lastName,
      tag: dto.tag
    };

    const user = await this.usersRepository.createUser(userForDB);

    const access_token = this.securityService.generateJwt(user);
    return access_token;
  };


  // ====================== LogIn ============================
  async login(user: SignInDto): Promise<TokenDto> {
    const userFromDB = await this.usersRepository.getUserByEmail(user.email);

    // Validste user email
    if(!userFromDB) {
      throw new HttpException(
        `errors.user.userDoesNotExist`,
        HttpStatus.NOT_FOUND
      );
    };

    // Validate user password
    const passwordIsMatch = await bcrypt.compare(user.password, userFromDB?.password);
    if(!passwordIsMatch) {
      throw new HttpException(
        `errors.authorization.unAuthorized`,
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    };

    const access_token = this.securityService.generateJwt(userFromDB);
    return access_token;
  };
};