import dotenv from 'dotenv';
import Server from './models/server';
// config({path:'.env'})
dotenv.config({path: '.env'})
const server = new Server();
server.listen();

