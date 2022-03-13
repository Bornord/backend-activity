// package imports
const http = require('http');
const app = require('./app.js');

// config 
const port = process.env.PORT || 3000;
const server = http.createServer(app)

http.Server.listener(port);

