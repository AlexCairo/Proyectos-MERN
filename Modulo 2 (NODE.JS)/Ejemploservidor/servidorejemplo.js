const http = require('http');

const servidor = http.createServer((request, response)=>{
    console.log('method => ',request.method);
    console.log('url => ',request.url);
    console.log('headers => ',request.headers);
    const headers = request.headers;
    const url = new URL(`http://${headers.host}${request.url}`);
    console.log('info url => ',url);
    const params = url.searchParams;
    console.log('search params => ',params);
    const status = params.get('status');
    console.log('status => ',status);
    console.log('body => ',request.body);
    response.statusCode = (status == 'ok') ? 200 : 500;
    response.end(request.url);
});

servidor.listen(3001, ()=>{
    console.log('Servidor iniciado en el puerto 3001');
});