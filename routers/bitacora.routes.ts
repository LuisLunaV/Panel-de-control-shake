import { Router } from 'express';
import { postNewChange } from '../controller/bitacora.controller';
const router = Router();

router.post('/', postNewChange);

export default router;