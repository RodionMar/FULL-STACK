// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

// ============================ DTO ====================================
import { CreateAuthDto } from "./create-auth.dto";


export class UpdateAuthDto extends PartialType(CreateAuthDto) {};