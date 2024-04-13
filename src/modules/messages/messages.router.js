import { Router } from "express";
import * as messagesController from './messages.controller.js'
import auth from './../../middleware/auth.middleware.js';
import { asyncHandler } from './../../utils/error.handling.js';
const router =Router();

router.get('/',auth,asyncHandler(messagesController.getmessages))
router.post('/sendmessage/:recieverID',asyncHandler(messagesController.sendMessage))


export default router;