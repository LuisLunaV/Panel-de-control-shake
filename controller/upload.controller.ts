import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const carpetaImagen = "../../img";
export const uploadFiles = {
  readDirectory: (req: Request, res: Response) => {
    
    const rutaDeArchivo = path.join(__dirname, carpetaImagen);

    fs.readdir( rutaDeArchivo , (err, archivos) => {

      if (err) {
        console.error("Error al leer la carpeta:", err);
        return res.status(500).json({ 
          error: "Error al leer la carpeta",
          err 
        });
      }
      // Filtra los archivos con extensión .jpg
      const archivosJPG = archivos.filter((archivo) => {
        return path.extname(archivo).toLowerCase() === ".jpg";
      });

      // Imprime la lista de archivos .jpg
      res.status(200).json({
        ...archivosJPG,
      });
    });
  },

  uploadImage: (req: Request, res: Response) => {
    try {
      res.status(200).json({
        msg: `Imagen subida correctamente`,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Error al cargar imagen",
        error: error,
      });
    }
  },

  uploadMultiplesImages: (req: Request, res: Response) => {
    res.status(200).json({
      msg: `Imagenes subida correctamente`,
    });
  },

  deleteImage: (req: Request, res: Response) => {
    const { id } = req.params;

    const rutaDeArchivo = path.join(__dirname, carpetaImagen, `${id}`);

    fs.unlink(rutaDeArchivo, (err) => {
      if (err) {
        return res.status(204).json({
          msg: `Archico con el id:${id} no encontrado`,
        });
      }

      return res.status(200).json({
        rutaDeArchivo,
        msg: "Imagen eliminada",
      });
    });
  },
};
