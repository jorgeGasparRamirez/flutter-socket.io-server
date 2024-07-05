// import express from 'express';
const express = require('express');
const app = express();

// import path from 'path';
const path = require('path');
// import dotenv from 'dotenv';
require('dotenv').config();
// dotenv.config();

//Node Server
const server = require('http').createServer(app);
// import http from 'http';

// const server = http.createServer(app);


module.exports.io = require('socket.io')(server);

//Mensajes de Sockets
require('./sockets/socket')



//Path Publico
const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

server.listen(process.env.PORT, ( err )=>{
    if(err) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT);
})