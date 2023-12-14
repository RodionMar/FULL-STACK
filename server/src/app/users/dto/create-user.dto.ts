// ============================ Validation ====================================
import { IsString, MinLength, IsEmail, IsNotEmpty } from 'class-validator';


export class CreateUserDto {
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