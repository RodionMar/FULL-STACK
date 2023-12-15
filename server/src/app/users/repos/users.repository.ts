// ================================ Nest ================================
import { Injectable } from "@nestjs/common/decorators";

// ================================ TypeORM ================================
import { EntityManager, EntityTarget, QueryRunner, Repository } from "typeorm";

// ================================ Entities ================================
import { UsersEntity } from "../entities/user.entity";

// ================================ DTO ================================
import { UserSessionDto } from "../dto/user-session.dto";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class UserRepository extends Repository<UsersEntity> {
  constructor(
    @InjectRepository(UsersEntity)
    readonly userRepository: Repository<UsersEntity>
  ){
    super(
      userRepository.target, 
      userRepository.manager, 
      userRepository.queryRunner);
  };
  async createUser(data: UserSessionDto) {
    const user = this.create(data);
    return await this.save(user);
  }
}