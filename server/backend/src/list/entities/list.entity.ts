import { Column, Entity } from "typeorm";

@Entity()
export class List {
  @Column()
  name: string
}
