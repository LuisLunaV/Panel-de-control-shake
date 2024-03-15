import express, { Application } from "express";
import { dbConnection } from '../db/config.db';

import { usersRouter, authRouter, uploadImageRouter} from '../routers/index.routes';

class Server {
  private app: Application;
  private port: string;
  private paths = {
    users: "/api/v1/users",
    auth: "/api/v1/auth",
    uploadImages: "/api/v1/imagen"
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8082";

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
    this.app.use(express.static('src'));
  }

  router() {
    this.app.use( this.paths.users, usersRouter );
    this.app.use( this.paths.auth, authRouter )
    this.app.use( this.paths.uploadImages, uploadImageRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

export default Server;
