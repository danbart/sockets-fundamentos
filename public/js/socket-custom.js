var socket = io();

socket.on('connect', function() {
    console.log('Conectado al Servidor');
})

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// Enviar Información
socket.emit('enviarMensaje', {
    usuario: 'Danilo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Se disparó el callback', resp);
})

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})