const http = require('http');
const fs = require('fs');

const html = fs.readFileSync('./index.html');

const servidor = (request, response) => {
    response.write(html);
    response.end();
}

http.createServer(servidor).listen(8080);