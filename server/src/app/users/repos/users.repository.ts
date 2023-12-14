// ========================== Nest ======================================
import { HttpStatus, Injectable } from "@nestjs/common";

// ========================== TypeORM ======================================
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

// ========================== Entities ======================================
import { UserEntities } from "../entities/user.entity";

// ========================== DTO ======================================
import { CreateUserDto } from "../dto/create-user.dto";

// ====================== Hashing ============================
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersRepository extends Repository<UserEntities> {
  constructor(
    @InjectRepository(UserEntities)
    usersRepository: Repository<UserEntities>
  ) {
    super(
      usersRepository.target,
      usersRepository.manager,
      usersRepository.queryRunner
    );
  }

  async getAll(): Promise<UserEntities[]> {
    return await this.find();
  }

  async getUserById(userId: string): Promise<UserEntities> {
    return await this.findOne({
      where: {
        id: userId,
      }
    });
  }

  async createUser(createUser: CreateUserDto): Promise<UserEntities> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUser.password, salt);

    const user = new UserEntities();
    Object.assign(user, createUser);

    const newUser = await this.create({
      email: createUser.email,
      password: hashedPassword,
      firstName: createUser.firstName,
      lastName: createUser.lastName,
      tag: createUser.tag,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return await this.save(user);
  }

  async getUserByTag(userTag: string): Promise<UserEntities> {
    return await this.findOneBy({
      tag: userTag
    });
  }

  async getUserByEmail(email: string): Promise<UserEntities> {
    return await this.findOneBy({
      email: email
    });
  }

  async updateUser(newData: UserEntities): Promise<UserEntities> {
    return await this.save(newData);
  }

  async deleteUser(userId: string): Promise<HttpStatus> {
    await this.delete(userId);
    return HttpStatus.OK;
  }

  async getUsersArrayByEmail(email: string): Promise<UserEntities[]> {
    return await this.find({
      where: {
        email: email
      }
    });
  }

  async getUsersArrayByTag(tag: string): Promise<UserEntities[]> {
    return await this.find({
      where: {
        tag: tag
      }
    });
  }
};