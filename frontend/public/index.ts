import { io } from "socket.io-client";  // Importar io desde socket.io-client

const socket = io('http://localhost:3000');  // Conexión al servidor backend

const sendMessage = (): void => {
  const user = (document.getElementById('user') as HTMLInputElement).value;
  const message = (document.getElementById('message') as HTMLInputElement).value;

  if (user && message) {
    socket.emit('sendMessage', { user, text: message });
    (document.getElementById('message') as HTMLInputElement).value = '';
  }
};

socket.on('receiveMessage', (message: { user: string; text: string }): void => {
  const chat = document.getElementById('chat');
  const newMessage = document.createElement('li');
  newMessage.innerText = `${message.user}: ${message.text}`;
  chat?.appendChild(newMessage);
});

socket.emit('getMessages');

socket.on('messageHistory', (messages: { user: string; text: string }[]): void => {
  const chat = document.getElementById('chat');
  chat!.innerHTML = '';
  messages.forEach((message) => {
    const newMessage = document.createElement('li');
    newMessage.innerText = `${message.user}: ${message.text}`;
    chat?.appendChild(newMessage);
  });
});

(document.querySelector('button') as HTMLButtonElement).onclick = sendMessage;

