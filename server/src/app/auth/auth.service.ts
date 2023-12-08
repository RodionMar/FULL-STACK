// ============================ Nest ====================================
import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// ====================== TypeORM ============================
import { Repository } from "typeorm";

// ====================== Entities ============================
import { AuthEntities } from "./entities/auth.entity";

// ====================== Hashing ============================
import * as bcrypt from 'bcrypt';

// ====================== Configs ============================
import { UsersService } from "../users/users.service";


@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {};

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    const passwordIsMatch = await bcrypt.compare(password, user.password);

    if (user && passwordIsMatch) {
      return user;
    };

    throw new UnauthorizedException("User or password incorrect");
  }
};