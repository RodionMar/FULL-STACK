import "dotenv/config";
// ================================ TypeORM ================================
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// ================================ Entities ================================
import { UsersEntity } from "../app/users/entities/user.entity";

// ================================ Migrations ================================
import { $npmConfigName1704458287701 } from "../../migrations/1704458287701-$npm_config_name";


const dataBaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost", // localhost || process.env.POSTGRES_HOST
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UsersEntity],
  synchronize: false,
  migrations:[
    $npmConfigName1704458287701
  ]
};
export default dataBaseConfig;