import { Router } from 'express'
import * as userController from './users.controller.js'
import auth from './../../middleware/auth.middleware.js';
import  {asyncHandler}  from './../../utils/error.handling.js';
const router=Router();

router.get('/profile',asyncHandler(auth),asyncHandler(userController.getProfile))




export default router;