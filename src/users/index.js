import { Router } from 'express'
import * as controller from './user.controller'
import authenticate from '../middleware/authenticate'

const router = Router()

router.get('/', authenticate, controller.getAll)
router.post('/', controller.create)
router.get('/:id', authenticate, controller.getById)
router.put('/:id', authenticate, controller.edit)
router.delete('/:id', authenticate, controller.destroy)

export default router
