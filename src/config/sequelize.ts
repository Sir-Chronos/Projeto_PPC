import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

//Make sure to create a .env file in the root folder

const sequelize = new Sequelize({
  database: process.env.POSTGRESS_DATABASE,
  dialect: 'postgres',
  username: process.env.POSTGRESS_USER,
  password: process.env.POSTGRESS_PASSWORD,
  host: process.env.POSTGRESS_HOST,
  port: Number(process.env.POSTGRESS_PORT), 
  models: [__dirname + '../models'],
});

export default sequelize;
