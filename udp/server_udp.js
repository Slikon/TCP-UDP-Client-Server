const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`RECIEVED FROM CLIENT : "${msg.toString()}"`);
  console.dir({ msg, rinfo });
});

server.bind(3000);
