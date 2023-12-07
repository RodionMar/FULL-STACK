// ====================== Configs ============================
import "dotenv/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

// ========================== Entities ==========================
import { AuthEntities } from "src/app/auth/entities/auth.entity";
import { DeedsEntities } from "src/app/deeds/entities/deeds.entity";


const databaseConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost", // process.env.POSTGRES_HOST || localhost
  port: +process.env.POSTGRES_PORT, 
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [
    AuthEntities,
    DeedsEntities
  ],
  synchronize: true
};

export default databaseConfig;