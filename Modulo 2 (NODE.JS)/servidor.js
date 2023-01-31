// Importamos el paquete http 
const http = require('http');

// Creamos el servidor
const servidor = http.createServer(function(request,response){
    console.log('Servidor Web Ok');
    response.write('Bienvenido ');
    response.end('Hola Mundo!');
});

// Definimos el puerto del servidor
servidor.listen(3000, function(){
    console.log('Servidor corriendo en el puerto 3000');
});