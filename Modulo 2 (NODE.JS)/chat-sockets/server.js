const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static('public'));

const server = app.listen(3000, ()=>{
	console.log('Servidor iniciado en el puerto 3000');
});

const io = socket(server);
io.on('connection', (socket)=>{
	console.log('Socket conectado:', socket.id);

	// Esperando datos enviados desde el cliente por el canal mensaje
	socket.on('mensaje', (data)=>{
    		console.log(data);
		// El servidor envía la data recuperada
    	// a todos los cliente que están a la escucha
    	// del canal mensaje
    	io.sockets.emit('mensaje', data);
});

socket.on('disconnect', ()=>{
    	console.log('Usuario desconectado:', socket.id);
	});
});
