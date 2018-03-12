import { Router } from 'express';
import { getAll, createUser } from './user.controller';
import authenticate from '../middleware/authenticate';

const router = Router();

router.get('/', authenticate, getAll);
router.post('/', createUser);

export default router;
