// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

// ============================ DTO ====================================
import { SignUpDto } from "./sign-up.dto";


export class SignInDto extends PartialType(SignUpDto) {};