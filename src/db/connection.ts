import  { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

/* const db= new Sequelize('naves','root','',{
    host:'localhost',
    dialect: 'mysql'
});
*/
const db = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
  host: process.env.DB_HOST!,
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true
  }
});

export default db;