// ============================ Nest ====================================
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// ============================ Configs ====================================
import { UsersService } from './users.service';
import { UserController } from './users.controller';

// ============================ Entities ====================================
import { UserEntities } from './entities/user.entity';

// ============================ Repositories ====================================
import { UsersRepository } from './repos/users.repository';

// ============================ Modules ====================================
import { SecurityModule } from '../security/security.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntities]),
    forwardRef(() => SecurityModule),
  ],
  controllers: [UserController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {}
