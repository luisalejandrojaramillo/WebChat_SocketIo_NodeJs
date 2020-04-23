//Mi direccion ip y el puerto asignado .. forceNew es para que la conexion se fuerce
var socket = io.connect('http://192.168.1.6:6677',{'forceNew':true});

socket.on('messages',function (data) {
    console.log(data);
    render(data);
});

//Pintar mensaje en el HTML
function render(data){
    //Recorrer info en map y hacer lo que se quiera
    var html = data.map(function (message, index) {
        //para que cada vez de cree el mensaje
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');
    var div_msgs = document.getElementById('messages');
    div_msgs.innerHTML = html;
    //Para que cuando haya un mensaje, este sea el foco, osea que se centre
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e) {
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };
    //Para que no se pueda cambiar el user
    document.getElementById('nickname').style.display='none';
    socket.emit('add-message',message);
    return false;
}
