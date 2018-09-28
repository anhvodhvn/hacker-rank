const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Express
const server = express();
server.use(cookieParser());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.set('port', process.env.PORT || 3000);
server.set('secretKey', '1234567890');

server.use('/api', require('./routes/api'));

module.exports = server;