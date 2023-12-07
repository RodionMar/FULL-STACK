// ============================ Nest ====================================
import { Controller, Post, Get, Delete, Patch, Body, Param } from "@nestjs/common";

// ============================ Config ====================================
import { DeedsService } from "./deeds.service";

// ============================ DTO ====================================
import { CreateDeedsDto } from "./dto/create-deeds.dto";
import { UpdateDeedsDto } from "./dto/update-deeds.dto";


@Controller("deeds")
export class DeedsController {
  constructor(private readonly deedsService: DeedsService) {};

  @Post()
  create(@Body() createDeedsDto: CreateDeedsDto) {
    return this.deedsService.create(createDeedsDto);
  };

  @Get()
  findAll() {
    return this.deedsService.findAll();
  };

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.deedsService.findOne(+id);
  };

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDeedsDto: UpdateDeedsDto) {
    return this.deedsService.update(+id, updateDeedsDto);
  };

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.deedsService.remove(+id);
  };
};