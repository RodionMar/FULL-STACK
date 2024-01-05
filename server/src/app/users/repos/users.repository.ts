// ================================ Nest ================================
import { Injectable } from "@nestjs/common/decorators";

// ================================ TypeORM ================================
import { EntityManager, EntityTarget, QueryRunner, Repository } from "typeorm";

// ================================ Entities ================================
import { UsersEntity } from "../entities/user.entity";

// ================================ DTO ================================
import { UserSessionDto } from "../dto/user-session.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { SecurityService } from "src/app/security/security.service";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserRepository extends Repository<UsersEntity> {
  constructor(
    @InjectRepository(UsersEntity)
    readonly userRepository: Repository<UsersEntity>,
  ){
    super(
      userRepository.target, 
      userRepository.manager, 
      userRepository.queryRunner);
  };
  async createUser(user: UserSessionDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);

    return await this.save({
      ...user,
      password: hash
    });
  };

  async getUserByEmail(email: string): Promise<UsersEntity | undefined> {
    return await this.findOne({
      where: { email: email }
    });
  }
}