// ========================== Nest ==========================
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

// ========================== Entities ==========================
import { UserEntities } from "../users/entities/user.entity";

// ========================== Repository ==========================
import { UsersRepository } from "../users/repos/users.repository";

// ========================== DTO ==========================
import { UserSessionDto } from "../users/dto/user-session.dto";
import { TokenDto } from "./dtos/token.dto";

@Injectable()
export class SecurityService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService
  ) {}

  async generateJwt(user: UserEntities): Promise<TokenDto> {
    const payload = await UserSessionDto.fromEntity(user);
    const payloadForToken = {
      id: payload.id,
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      tag: payload.tag,
      createdAt: payload.createdAt,
      updatedAt: payload.updatedAt
    };

    const token = this.jwtService.sign(payloadForToken);
    return { token };
  }

  async getUser(id: string): Promise<UserEntities> {
    const user = await this.usersRepository.getUserById(id);

    if(!user) {
      throw new HttpException(
        "errors.user.userDoesNotExist",
        HttpStatus.NOT_FOUND
      );
    }

    return user;
  }
}