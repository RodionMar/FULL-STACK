// ============================ Validation ====================================
import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';

// ========================== swagger ==========================
// import { ApiProperty } from '@nestjs/swagger';

// ========================== Entities ==========================
import { UserEntities } from 'src/app/users/entities/user.entity';


export class SignUpDto {
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
};