const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static('public'));

const server = app.listen(3000,()=>{
	console.log('Servidor iniciado en el puerto 3000')
});

const total = 0;
const donantes = [];
const io = socket(server);

io.on('connection', (socket)=>{
	// Ni bien se conecta un nuevo socket
	// se le envia al cliente el historico de donantes
	socket.emit('historico', donantes);
	// Recibir los datos enviandos por el cliente
	socket.on('enviar-donacion', (datos)=>{
    	console.log('datos enviados:', datos);
    	const persona = `${datos.nombre} (${datos.dni})`;
    	donantes.push(persona);
    	const mensaje = {
        	persona,
        	total: datos.monto
    	};
    	// Envio a todos los conectados
    	io.sockets.emit('respuesta', mensaje);
	});
});
