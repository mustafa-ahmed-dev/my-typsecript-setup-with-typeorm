import { Entity, Generated, Column, PrimaryColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column({
    type: "varchar",
    length: 30,
    unique: true,
  })
  username: string;

  @Column({
    type: "char",
    length: 90,
  })
  password: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  token: string;
}
