"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multerConfig_1 = require("../config/multerConfig");
const upload_controller_1 = require("../controller/upload.controller");
const router = (0, express_1.Router)();
router.get('/allImages', upload_controller_1.uploadFiles.readDirectory);
router.post('/single', multerConfig_1.upload.single('myImages'), upload_controller_1.uploadFiles.uploadImage);
router.delete('/:id', upload_controller_1.uploadFiles.deleteImage);
exports.default = router;
//# sourceMappingURL=upload.router.js.map