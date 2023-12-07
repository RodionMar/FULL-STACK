// ============================ Nest ====================================
import { Injectable } from "@nestjs/common";

// ============================ DTO ====================================
import { CreateDeedsDto } from "./dto/create-deeds.dto";
import { UpdateDeedsDto } from "./dto/update-deeds.dto";


@Injectable()
export class DeedsService {
  create(createDeedsDto: CreateDeedsDto) {
    return "This section adds new deeds";
  };

  findAll() {
    return "find all deeds";
  };

  findOne(id: number) {
    return `find ${id}`;
  };

  update(id: number, updateDeedsDto: UpdateDeedsDto) {
    return `Update ${id}`;
  };

  remove(id: number) {
    return `Delete ${id}`;
  };
}