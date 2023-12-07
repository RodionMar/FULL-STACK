// ============================ Nest ====================================
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// ====================== TypeORM ============================
import { Repository } from "typeorm";

// ============================ DTO ====================================
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";

// ====================== Entities ============================
import { AuthEntities } from "./entities/auth.entity";

// ====================== Hashing ============================
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntities)
    private readonly authRepository: Repository<AuthEntities>
  ) {}

  public async create(createAuthDto: CreateAuthDto): Promise<AuthEntities> {
    
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createAuthDto.password, salt);

    // Check if a user with the specified email already exists in the database.
    // If the user exists, throw a BadRequestException with an error message.
    const existEmail = await this.authRepository.findOne({
      where: {
        email: createAuthDto.email,
      }
    });
    if(existEmail) throw new BadRequestException("This email alredy exist!");

    const auth = this.authRepository.create({
      ...createAuthDto,
      password: hashedPassword
    });
  
    return await this.authRepository.save(auth);
  };
};