import express, { Application } from "express";
// import cors from 'cors';
import uploadImageRouter from '../routers/upload.router';
class Server {
  private app: Application;
  private port: string;
  private paths = {
    uploadImages: "/api/v1/imagen",
  };
  constructor() {
    this.app = express();
    this.port = "8082";

    this.router();
    this.middlewares();
  }

  middlewares() {

    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  router() {
    this.app.use( this.paths.uploadImages, uploadImageRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en el puerto: ${this.port}`);
    });
  }
}

export default Server;
