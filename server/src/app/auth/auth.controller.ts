// ============================ Nest ====================================
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from "@nestjs/common";

// ============================ Services ====================================
import { AuthService } from "./auth.service";

// ============================ DTO ====================================
import { CreateAuthDto } from "./dto/create-auth.dto";
import { UpdateAuthDto } from "./dto/update-auth.dto";

// ====================== Entities ============================
import { AuthEntities } from "./entities/auth.entity";


@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signUp")
  @UsePipes(new ValidationPipe())
  async create(@Body() createAuthDto: CreateAuthDto) {
    return await this.authService.create(createAuthDto);
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
