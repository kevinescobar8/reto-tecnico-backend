import  { Sequelize } from 'sequelize';

const db= new Sequelize('naves','root','',{
    host:'localhost',
    dialect: 'mysql'
});

export default db;