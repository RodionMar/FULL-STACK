// ============================ Validation ====================================
import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';

// ========================== swagger ==========================
// import { ApiProperty } from '@nestjs/swagger';


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName!: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName!: string;

  @IsEmail(undefined, { message: "Incorrect email!" })
  @IsNotEmpty()
  readonly email!: string;

  @MinLength(8, { message: "Password must be more than 8 symbols!" })
  @IsNotEmpty()
  readonly password!: string;
};