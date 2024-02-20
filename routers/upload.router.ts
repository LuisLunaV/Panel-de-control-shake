import { Router } from 'express';

import { upload1080x1920, upload1080x1152 } from '../config/multerConfig';
import { uploadFiles } from '../controller/upload.controller';
const router = Router();
router.get('/allImages', uploadFiles.readDirectory);
router.post('/single1080x1920', upload1080x1920.single('myImages'), uploadFiles.uploadImage);
router.post('/single1080x1152', upload1080x1152.single('myImages'), uploadFiles.uploadImage);

router.delete('/:id', uploadFiles.deleteImage);
export default router;