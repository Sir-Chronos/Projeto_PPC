import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
    user: process.env.POSTGRESS_USER,
    host: process.env.POSTGRESS_HOST,
    database: process.env.POSTGRESS_DATABASE,
    password: process.env.POSTGRESS_PASSWORD,
    port: Number(process.env.POSTGRESS_PORT),
});

export default pool;
