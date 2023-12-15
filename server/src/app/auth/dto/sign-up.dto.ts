import { IsString } from "class-validator";
import { IsBoolean, IsEmail, MinLength } from "class-validator/types/decorator/decorators";

export class SignUpDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsString()
  tag: string

  @IsBoolean()
  isActive: boolean;
}