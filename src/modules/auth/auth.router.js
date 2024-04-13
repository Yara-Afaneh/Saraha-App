import { Router } from 'express'
import * as authController from './auth.controller.js'
import { asyncHandler } from './../../utils/error.handling.js';
import validation from './../../middleware/validation.js';
import { loginSchema, registerSchema } from './auth.validation.js';
const router=Router();


router.post('/register',validation(registerSchema),asyncHandler(authController.register))
router.post('/login',validation(loginSchema), asyncHandler(authController.login))
router.get('/confirmEmail/:token',asyncHandler(authController.confirmEmail))


export default router;