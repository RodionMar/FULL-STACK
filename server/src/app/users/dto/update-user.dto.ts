// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

// ============================ DTO ====================================
import { CreateUserDto } from "./create-user.dto";


export class UpdateUserDto extends PartialType(CreateUserDto) {};