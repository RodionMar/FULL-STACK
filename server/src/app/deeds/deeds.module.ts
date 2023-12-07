// ============================ Nest ====================================
import { Module } from "@nestjs/common";

// ============================ Configs ====================================
import { DeedsController } from "./deeds.controller";
import { DeedsService } from "./deeds.service";


@Module({
  controllers: [DeedsController],
  providers: [DeedsService]
})
export class DeedsModule {};