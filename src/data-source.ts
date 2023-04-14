import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities";

import config from "./config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: config.database.host,
  port: config.database.port,
  username: config.database.user,
  password: config.database.userPassword,
  database: config.database.name,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
