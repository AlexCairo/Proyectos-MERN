const http = require('http');

const iniciar = (req, res) => {
    res.end('Servidor Web Listo');
};

const servidor = http.createServer(iniciar);

servidor.listen(3001, ()=>{
    console.log('Servidor corriendo en el puerto 3001');
});