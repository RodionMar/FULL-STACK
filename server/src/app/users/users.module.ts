import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { UserRepository } from './repos/users.repository';
import { UserService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UserRepository, UserService],
  exports: [UserService]
})
export class UsersModule {}