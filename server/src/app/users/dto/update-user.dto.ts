// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

// ============================ DTO ====================================
import { UserSessionDto } from "./user-session.dto";


export class UpdateUserDto extends PartialType(UserSessionDto) {};