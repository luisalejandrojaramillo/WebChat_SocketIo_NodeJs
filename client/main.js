//Mi direccion ip y el puerto asignado .. forceNew es para que la conexion se fuerce
var socket = io.connect('http://192.168.1.6:6677',{'forceNew':true});

socket.on('message',function (data) {
    console.log(data);
    render(data);
});

//Pintar mensaje en el HTML
function render(data) {
    //Recorrer info en map y hacer lo que se quiera
    var html = data.map(function (message,index) {
        //para que cada vez de cree el mensaje
        return (`
            <div class="message">
                <strong>${message.nickname}</strong>
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    document.getElementById('messages').innerHTML = html;
}