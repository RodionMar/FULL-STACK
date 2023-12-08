// ============================ Nest ====================================
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from "@nestjs/common";

// ============================ Services ====================================
import { UsersService } from "./users.service";

// ============================ DTO ====================================
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

// ====================== Entities ============================
import { UserEntities } from "./entities/user.entity";


@Controller("users")
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post("/signUp")
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  };

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // };

  // @Get(":id")
  // findOne(@Param("id") id: string) {
  //   return this.authService.findOne(+id);
  // };

  // @Patch(":id")
  // update(@Param("id") id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // };

  // @Delete(":id")
  // remove(@Param("id") id: string) {
  //   return this.authService.remove(+id);
  // };
}
