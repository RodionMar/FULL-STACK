// ====================== Configs ============================
import "dotenv/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// ========================== Entities ==========================
import { DeedsEntities } from "src/app/deeds/entities/deeds.entity";
import { UserEntities } from "src/app/users/entities/user.entity";


const databaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost", // process.env.POSTGRES_HOST || localhost
  port: +process.env.POSTGRES_PORT, 
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    UserEntities
  ],
  synchronize: true
};

export default databaseConfig;