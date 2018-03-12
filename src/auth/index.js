import { Router } from 'express';
import controller from './auth.controller';

const router = Router();

router.post('/', controller);

export default router;
