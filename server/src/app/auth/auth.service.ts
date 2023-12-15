// ================================ Nest ================================
import { Injectable } from "@nestjs/common/decorators";

// ================================ Repositories ================================
import { UserRepository } from "../users/repos/users.repository";

// ================================ DTO ================================
import { SignUpDto } from "./dto/sign-up.dto";
import { UserSessionDto } from "../users/dto/user-session.dto";


@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository
  ) {};

  // ================================ SignUp ================================
  async signUp(data: UserSessionDto) {
    this.userRepository.createUser(data);
  }

}