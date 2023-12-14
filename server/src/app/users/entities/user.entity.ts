// ====================== TypeORM ============================
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

// ====================== Entities ============================
import { UUIDEntity } from "src/shared/entities/uuid.entity";


@Entity()
export class UserEntities extends UUIDEntity {

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  tag: string;

  @Column()
  email: string;

  @Column()
  password: string;
};