"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const carpetaImagen = "../../img";
exports.uploadFiles = {
    readDirectory: (req, res) => {
        fs_1.default.readdir(carpetaImagen, (err, archivos) => {
            if (err) {
                console.error("Error al leer la carpeta:", err);
                return res.status(500).json({ error: "Error al leer la carpeta" });
            }
            // Filtra los archivos con extensión .jpg
            const archivosJPG = archivos.filter((archivo) => {
                return path_1.default.extname(archivo).toLowerCase() === ".jpg";
            });
            // Imprime la lista de archivos .jpg
            res.status(200).json(Object.assign({}, archivosJPG));
        });
    },
    uploadImage: (req, res) => {
        try {
            res.status(200).json({
                msg: `Imagen subida correctamente`,
            });
        }
        catch (error) {
            res.status(500).json({
                msg: "Error al cargar imagen",
                error: error,
            });
        }
    },
    uploadMultiplesImages: (req, res) => {
        res.status(200).json({
            msg: `Imagenes subida correctamente`,
        });
    },
    deleteImage: (req, res) => {
        const { id } = req.params;
        const rutaDeArchivo = path_1.default.join(__dirname, carpetaImagen, `${id}`);
        fs_1.default.unlink(rutaDeArchivo, (err) => {
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
//# sourceMappingURL=upload.controller.js.map