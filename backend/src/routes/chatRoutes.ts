import { Router } from 'express';
import { postChatMessage } from '../controllers/chatController';

const router = Router();

router.post('/message', postChatMessage);

export default router;
