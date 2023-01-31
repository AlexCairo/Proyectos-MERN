const fs = require('fs');
const express = require('express');

const server = express();

server.engine('ntl', function (filePath, options, callback) {
    fs.readFile(filePath, function (err, content) { 
      if (err) return callback(new Error(err)); 
      var rendered = content.toString().replace('#name#', ''+ options.name +'') 
        .replace('#email#', ''+ options.email +''); 
      return callback(null, rendered);
    }); 
});
server.set('views', './views');
server.set('view engine', 'ntl');

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));

server.post('/contactanos/respuesta', (req, res)=>{
    console.log(req.body);
    const { nombre, email } = req.body;
    res.render('respuesta', { name: nombre, email });
});

server.listen(3080, ()=>{
    console.log('Servidor habilitado en el puerto 3080');
});
