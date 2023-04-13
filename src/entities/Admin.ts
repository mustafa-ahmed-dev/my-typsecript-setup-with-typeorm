import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Gender } from "./../api/admin/admin.validation";

@Entity()
export class Admin {
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
