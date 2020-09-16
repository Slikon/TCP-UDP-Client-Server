const net = require('net');

const ADDRESS = 'localhost';
const PORT = 2000;

const socket = new net.Socket();

const send = (message) => {
  console.log('Client >', message);
  socket.write(message);
};

socket.on('data', (data) => {
  console.log('Server >', data.toString());
});

socket.on('end', () => {
  console.log('Disconnected from server');
  console.dir({
    bytesRead: socket.bytesRead,
    bytesWritten: socket.bytesWritten,
  });
});

socket.on('error', (err) => {
  console.log('ERROR ' + err);
});

socket.on('connect', () => {
  send('CLI DATA');
  send('CLI DATA');
  send('CLI DATA');
});

socket.connect({
  port: PORT,
  host: ADDRESS,
});
