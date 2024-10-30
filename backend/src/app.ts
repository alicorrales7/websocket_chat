import express from 'express';
import chatRoutes from '../src/routes/chatRoutes';

const app = express();
app.use(express.json());

// Usar las rutas de chat
app.use('/api/chat', chatRoutes);

export default app;
