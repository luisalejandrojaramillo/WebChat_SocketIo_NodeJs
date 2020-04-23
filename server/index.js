var express  = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Usar un middleware de Node js
app.use(express.static('client'));

app.get('/hola-mundo',function (req,res) {
    res.status(200).send('Hola mundo desde una ruta');
});

var message = [{
    id:1,
    text: "Bienvedo al chat privado de Socket.io y NodeJS de Luis Alejandro Jaramillo",
    nickname: 'Bot - LuisAlejandroJaramillo'
}];

//Permite lanzar eventos, abrimos una coneccion al Socket
io.on('connection',function (socket) {
    console.log("El nodo con IP:" + socket.handshake.address+" se ha conectado...");
    socket.emit('message',message);
});

server.listen(6677,function () {
    console.log("Server funcionando en http://localhost:6677")
});
