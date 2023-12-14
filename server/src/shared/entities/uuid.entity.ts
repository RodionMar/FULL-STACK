// ============================ typeorm =================================
import { Column, PrimaryGeneratedColumn } from "typeorm";


export abstract class UUIDEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    name: "createdAt",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  createdAt!: Date;

  @Column({
    name: "updatedAt",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updatedAt!: Date;
}
