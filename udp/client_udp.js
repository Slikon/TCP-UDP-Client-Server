const dgram = require('dgram');
const char = require('char');

const PORT = 3000;
const ADDR = 'localhost';

const client = dgram.createSocket('udp4');

const sendChars = () => {
  //generating random char and sending it to server
  for (let i = 0; i < 9; i++) {
    let data = char(Math.ceil(Math.random() * 100));
    client.send(data, PORT, ADDR, (err) => {
      if (err) {
        client.close();
        throw err;
      }
    });
    console.log('SENT TO CLIENT: \n' + data.toString());
  }
};

sendChars();
