const SERVER = require('http').createServer();
const io = require('socket.io')(SERVER, {
  cors: {
    origin: '*'
  }
});

const registerMessageHandlers = require('./handlers/messageHandlers');
const registerUserHandlers = require('./handlers/userHandlers');

io.on('connection', (socket) => {
  console.log('User connected');

  const { roomId } = socket.handshake.query;
  socket.roomId = roomId;

  socket.join(roomId);

  registerMessageHandlers(io, socket, roomId);
  registerUserHandlers(io, socket, roomId);

  socket.on('disconnect', () => {
    console.log('User disconnected')
    socket.leave(roomId)
  });
});

const PORT = process.env.PORT || 5000;

SERVER.listen(PORT, () => {
  console.log(`Server ready. Port: ${PORT}`);
});