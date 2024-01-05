import { IsBoolean, IsEmail, MinLength, IsString, IsNotEmpty } from "class-validator";

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsString()
  tag: string

  @IsBoolean()
  isActive: boolean;
}