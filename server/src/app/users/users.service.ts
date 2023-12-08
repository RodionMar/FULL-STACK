// ============================ Nest ====================================
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// ====================== TypeORM ============================
import { Repository } from "typeorm";

// ============================ DTO ====================================
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

// ====================== Entities ============================
import { UserEntities } from "./entities/user.entity";

// ====================== Hashing ============================
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntities)
    private readonly userRepository: Repository<UserEntities>
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<UserEntities> {
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    // Check if a user with the specified email already exists in the database.
    // If the user exists, throw a BadRequestException with an error message.
    const existEmail = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      }
    });
    if(existEmail) throw new BadRequestException("This email alredy exist!");

    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword
    });
  
    return await this.userRepository.save(user);
  };

  public async findOne(email: string): Promise<UserEntities | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
};
