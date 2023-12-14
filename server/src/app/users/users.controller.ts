// ============================ Nest ====================================
import { Controller } from "@nestjs/common";

// ============================ Services ====================================
import { UsersService } from "./users.service";


@Controller("users")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  
}
