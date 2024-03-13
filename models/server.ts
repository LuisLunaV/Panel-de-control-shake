import express, { Application } from "express";
import { dbConnection } from '../db/config.db';

import uploadImageRouter from '../routers/upload.routes';
import usersRouter from '../routers/user.routes';

class Server {
  private app: Application;
  private port: string;
  private paths = {
    users: "/api/v1/users",
    uploadImages: "/api/v1/imagen"
  };
  constructor() {
    this.app = express();
    this.port = "8082";

    this.connectDB();
    this.middlewares();
    this.router();
  }

  async connectDB(){
    await dbConnection();
  }

  middlewares() {

   // Lectura del body
   this.app.use(express.json());

    this.app.use(express.static('public'));
  }

  router() {
    this.app.use( this.paths.users, usersRouter );
    this.app.use( this.paths.uploadImages, uploadImageRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

export default Server;
