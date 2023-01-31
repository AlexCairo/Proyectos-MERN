const http = require('http');
const fs = require('fs');

const servidor = http.createServer((request, response)=>{
    console.log('============================');
    console.log("request.url => ",request.url);
    
    const url = new URL('http://localhost:3001'+request.url);
    console.log("url => ",url);
    
    const rutaPagina = (url.pathname=='/') ? 'pages/index.html' : 'pages' + url.pathname;
    console.log("rutaPagina => ", rutaPagina);
    
    const isValid = fs.existsSync(rutaPagina);
    console.log("isValid => ", isValid);

    if(isValid){
        fs.readFile(rutaPagina, (err, contenido)=>{
            if(err){
                console.log('Error => ', err);
                //response.statusCode = 500;
                response.writeHead(500, {'Content-Type':'text/plain'});
                response.write('Error interno');
                response.end();
            }else{
                response.writeHead(200, {'Content-Type':'text/html'});
                response.end(contenido);
            }
        });
    }else{
        //response.statusCode = 400;
        response.writeHead(404, {'Content-Type':'text/html'});
        response.write('<html><body>Error 404</body></html>');
        response.end();
    }
});

servidor.listen(3001, ()=>{
    console.log('Servidor inciado en el puerto 3001');
});