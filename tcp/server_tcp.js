const net = require('net');

const ADDRESS = 'localhost';
const PORT = 2000;

const connection = (socket) => {
  console.log('*******NEW CONNECTION*******');
  console.dir({
    localAddress: socket.localAddress,
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remoteFamily: socket.remoteFamily,
    remotePort: socket.remotePort,
    bufferSize: socket.bufferSize,
  });

  socket.write(`Welcome, client #${socket.localPort}`);

  socket.on('data', (data) => {
    console.log('RECIEVED Data:', data.toString());
  });

  socket.on('end', () => {
    console.log(`Disconnected >>> client #${socket.localPort}`);
    console.dir({
      bytesRead: socket.bytesRead,
      bytesWritten: socket.bytesWritten,
    });
  });

  socket.on('error', (err) => {
    console.log('ERROR ' + err);
  });
};

const server = net.createServer();

server.on('connection', connection);

server.listen(PORT, ADDRESS);
