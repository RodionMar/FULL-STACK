import "dotenv/config";
// ================================ TypeORM ================================
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// ================================ Entities ================================
import { UsersEntity } from "src/app/users/entities/user.entity";


const dataBaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost", // localhost || process.env.POSTGRES_HOST
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [UsersEntity],
  synchronize: true
};
export default dataBaseConfig;