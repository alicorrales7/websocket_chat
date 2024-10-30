import app from './app';
import WebSocket from 'ws';

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

// Configuración de WebSockets
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Cliente conectado');
  ws.on('message', (message) => {
    console.log('Mensaje recibido:', message);
  });
  ws.on('close', () => {
    console.log('Cliente desconectado');
  });
});
