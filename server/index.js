var express  = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Usar un middleware de Node js
app.use(express.static('client'));

app.get('/hola-mundo',function (req,res) {
    res.status(200).send('Hola mundo desde una ruta');
});

//Permite lanzar eventos, abrimos una coneccion al Socket
io.on('connection',function (socket) {
    console.log("El nodo con IP:" + socket.handshake.address+" se ha conectado...");
});

server.listen(6677,function () {
    console.log("Server funcionando en http://localhost:6677")
});
