// ================================ Entities ================================
import { UUIDEntity } from "src/shared/entities/uuid.entity";

// ================================ TypeORM ================================
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsersEntity extends UUIDEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  tag: string

  @Column({ default: false })
  isActive: boolean;
}