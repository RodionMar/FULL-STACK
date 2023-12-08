// ============================ Nest ====================================
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ============================ Configs ====================================
import { UsersService } from './users.service';
import { UserController } from './users.controller';

// ============================ Entities ====================================
import { UserEntities } from './entities/user.entity';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntities])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
