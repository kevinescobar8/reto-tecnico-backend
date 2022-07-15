import express from 'express';
import userRoutes from '../Routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server{
    private app: express.Application;
    private port: string;
    private apiPaths ={
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = '3000';
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('database online');       
        } catch (error:any) {
            throw new Error( error );
        }
    }


    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`server runing on port ${this.port}`);
        })
    }
}

export default Server;