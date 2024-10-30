import { Request, Response } from 'express';
import { saveChatMessage } from '../repositories/chatRepository';
import ChatMessage from '../interfaces/chatInterface';

export const postChatMessage = async (req: Request, res: Response) => {
  const message: ChatMessage = req.body;
  try {
    await saveChatMessage(message);
    res.status(201).send('Mensaje guardado');
  } catch (error) {
    res.status(500).send('Error al guardar el mensaje');
  }
};
