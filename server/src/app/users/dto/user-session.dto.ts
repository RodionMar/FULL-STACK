// ============================ DTO =================================
import { UUIDDto } from "src/shared/dtos/uuid.dto";


export class UserSessionDto extends UUIDDto {
  firstName: string;

  lastName: string;

  email: string;

  password: string;

  tag: string

  isActive: boolean;
}