import express from 'express';
import {getChats,getChat,addChat,readChat, findChat  } from '../controllers/chat.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/',verifyToken, getChats);
router.get('/:id',verifyToken, getChat);
router.post('/',verifyToken, addChat);
router.put("/read/:id", verifyToken, readChat);
router.post("/find/:id", findChat);


export default router;