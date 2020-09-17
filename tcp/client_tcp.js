const net = require('net');
const random = require('random-bigint');

const ADDRESS = 'localhost';
const PORT = 2000;

//Generating long ints for future transfer to server
const longNumsGenerate = () => {
  let longNums = [];
  for (let i = 0; i < 2; i++) {
    longNums.push(random(128));
  }

  return longNums;
};

//creating socket for communication with server
const socket = new net.Socket();

const send = (message) => {
  console.log('Client > ', message);
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
  socket.setNoDelay(true); //disabling Nagle's algorithm - packets of data will be sent immediately without delays

  longNumsGenerate().forEach((element) => {
    send(element.toString());
  });
});

socket.connect({
  port: PORT,
  host: ADDRESS,
});
