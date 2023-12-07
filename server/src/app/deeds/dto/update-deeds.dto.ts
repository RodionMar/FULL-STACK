// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

import { CreateAuthDto } from "src/app/auth/dto/create-auth.dto";

export class UpdateDeedsDto extends PartialType(CreateAuthDto) {};