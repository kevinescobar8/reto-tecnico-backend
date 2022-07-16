import * as dotenv from 'dotenv';
import Server from './controllers/server';
dotenv.config();

const server = new Server();

server.listen();