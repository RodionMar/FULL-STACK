// ================================ TypeORM ================================
import { DataSource } from "typeorm";

// ================================ Config ================================
import dataBaseConfig from "./database.config";


export default new DataSource(dataBaseConfig);