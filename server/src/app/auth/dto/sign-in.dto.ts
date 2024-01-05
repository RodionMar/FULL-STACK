import { IsBoolean, IsEmail, MinLength, IsString } from "class-validator";

export class SignInDto {
  @IsString()
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  // @IsBoolean()
  // isActive: boolean;
}