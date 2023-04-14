import { Entity, Column, Generated, PrimaryColumn } from "typeorm";

export enum Action {
  CREATE = "create",
  READ = "read",
  UPDATE = "update",
  DELETE = "delete",
}

export enum Doctype {
  USER = "user",
  PERMISSION = "permission",
}

@Entity()
export class Permission {
  @PrimaryColumn("uuid")
  @Generated("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: Doctype,
  })
  doctype: Doctype;

  @Column({
    type: "enum",
    enum: Action,
  })
  action: Action;
}
