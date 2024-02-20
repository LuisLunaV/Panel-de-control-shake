"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showFiles = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const showFiles = (res) => {
    fs_1.default.readdir(carpetaImagen, (err, archivos) => {
        if (err) {
            console.error('Error al leer la carpeta:', err);
            return res.status(500).json({ error: 'Error al leer la carpeta' });
        }
        // Filtra los archivos con extensión .jpg
        const archivosJPG = archivos.filter(archivo => {
            return path_1.default.extname(archivo).toLowerCase() === '.jpg';
        });
        // Imprime la lista de archivos .jpg
        res.status(200).json(Object.assign({}, archivosJPG));
    });
};
exports.showFiles = showFiles;
//# sourceMappingURL=fileSystemConfig.js.map