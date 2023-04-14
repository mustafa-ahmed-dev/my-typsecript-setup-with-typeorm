import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Gender } from "../api/types/enums";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "nvarchar",
    length: 45,
  })
  name: string;

  @Column("date")
  dateOfBirth: Date;

  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.MALE,
  })
  gender: Gender;
}
