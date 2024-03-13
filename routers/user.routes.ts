import { Router } from 'express';
import { users } from '../controller/users.controller';
const router = Router();

router.get('/',  users.getUsers);
router.post('/', users.postUsers);


export default router;