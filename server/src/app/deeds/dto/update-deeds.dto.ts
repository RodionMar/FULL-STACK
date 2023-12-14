// ============================ Nest ====================================
import { PartialType } from "@nestjs/swagger";

import { SignUpDto } from "src/app/auth/dto/sign-up.dto";

export class UpdateDeedsDto extends PartialType(SignUpDto) {};