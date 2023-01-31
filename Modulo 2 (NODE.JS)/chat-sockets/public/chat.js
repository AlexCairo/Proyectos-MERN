const socket = io();

// Elementos
const cajaUsuario =  document.getElementById('inputUsuario');
const cajaMensaje = document.getElementById('inputMensaje');

function enviar(){
	const datos = {
    	usuario: cajaUsuario.value,
    	mensaje: cajaMensaje.value
	}
	socket.emit('mensaje', datos);
	cajaMensaje.value = '';
}

// Esperando datos enviado desde el servidor por el canal mensaje
socket.on('mensaje', (data)=>{
	console.log(data);
	const areaMensajes = document.getElementById('mensajes');
	areaMensajes.innerHTML += `<p>${data.usuario}: ${data.mensaje}</p>`;
});
