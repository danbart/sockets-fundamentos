const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienenido a la aplicación'
    })

    client.on('disconnect', () => {
        console.log('Cliente Desconectado');
    })

    // Escuchar el clinete
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        client.broadcast.emit('enviarMensaje', mensaje)

        /*  if (mensaje.usuario) {
             callback({
                 resp: 'todo salio bien'
             });
         } else {
             callback({
                 resp: 'todo salio Mal!!!!!'
             });
         } */
    })
})