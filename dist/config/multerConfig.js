"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const uuid_1 = require("uuid");
// Configuración del almacenamiento de archivos con multer.
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../img");
    },
    filename: function (req, file, cb) {
        // cb(null, file.originalname);
        cb(null, `${(0, uuid_1.v4)()}.jpg`);
    },
});
// Configuración del middleware de multer para la carga de archivos
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = ['image/jpeg', 'image/jpg']; // Define los tipos de archivos permitidos
        // Comprueba si el tipo MIME del archivo subido está en la lista de tipos de archivo permitidos
        if (fileTypes.includes(file.mimetype)) {
            return cb(null, true); // Si es así, permite la carga del archivo
        }
        cb(null, false); // Si no, rechaza la carga del archivo
        cb(new Error('Imagen no válida')); // También se podría lanzar un error personalizado
    }
});
exports.upload = upload;
//# sourceMappingURL=multerConfig.js.map