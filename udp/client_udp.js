const dgram = require('dgram');
const char = require('char');

const PORT = 3000;
const ADDR = 'localhost';

const client = dgram.createSocket('udp4');

const sendChars = () => {
  //generating random char and sending it to server
  for (let i = 0; i < 9; i++) {
    client.send(char(Math.ceil(Math.random() * 100)), PORT, ADDR, (err) => {
      if (err) {
        client.close();
        throw err;
      }
    });
  }
};

sendChars();
