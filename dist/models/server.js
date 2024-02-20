"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_router_1 = __importDefault(require("../routers/upload.router"));
class Server {
    constructor() {
        this.paths = {
            uploadImages: "/api/v1/imagen",
        };
        this.app = (0, express_1.default)();
        this.port = "8082";
        this.router();
        this.middlewares();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
    }
    router() {
        this.app.use(this.paths.uploadImages, upload_router_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor levantado en el puerto: ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map