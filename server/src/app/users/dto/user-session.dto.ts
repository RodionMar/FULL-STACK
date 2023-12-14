// ============================ Validation ====================================
import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';

// ========================== Entities ==========================
import { UserEntities } from '../entities/user.entity';

// ========================== DTO ==========================
import { UUIDDto } from 'src/shared/dtos/uuid.dto';


export class UserSessionDto extends UUIDDto {
  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsString()
  @IsNotEmpty()
  tag!: string;

  @IsEmail(undefined, { message: "Incorrect email!" })
  @IsNotEmpty()
  email!: string;

  @MinLength(8, { message: "Password must be more than 8 symbols!" })
  @IsNotEmpty()
  password!: string;

  public static fromEntity(entity: UserEntities) {
    return {
      id: entity.id,
      email: entity.email,
      firstName: entity.firstName,
      lastName: entity.lastName,
      tag: entity.tag,
      createdAt: entity.createdAt.valueOf(),
      updatedAt: entity.updatedAt.valueOf(),
    };
  };
  

  public static fromJwt(dto: UserSessionDto): UserSessionDto {
    if (!dto) {
      return;
    }

    const outputDto = new UserSessionDto();
    outputDto.id = dto.id;
    outputDto.email = dto.email;
    outputDto.firstName = dto.firstName;
    outputDto.lastName = dto.lastName;
    outputDto.tag = dto.tag;
    outputDto.createdAt = dto.createdAt.valueOf();
    outputDto.updatedAt = dto.updatedAt.valueOf();
    return dto;
  }
};