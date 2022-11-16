const express = require('express');
const { Signin } = require('./api/Signin.js');

const server = express();
const PORT = 9999;

server.use(express.static('dist'));
server.use(express.json());

Signin(server);

server.listen(PORT, () => {
  console.log(`open server http://localhost:${PORT}`);
});
