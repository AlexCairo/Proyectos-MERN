const { nextId, usuarios } = require('../data/usuarios.json');
const fs = require('fs');
const nodemailer = require('nodemailer');
const randtoken = require('rand-token');
const URL_SERVER_API = 'http://localhost:3001';

function registrar(req, res){
	const { nombres, email, clave } = req.body;
	const token = randtoken.generate(16);
	const nUsuario = {
    	id: nextId,
    	nombres,
    	email,
    	clave,
    	token,
    	estado: 'P'
	}
	const nLista = [...usuarios, nUsuario];
	//console.log('nLista => ', nLista);
	const nData = {
    	nextId: nextId+1,
    	usuarios: nLista
	}
	//console.log('nData => ', nData);
	fs.writeFileSync(
    	'./src/data/usuarios.json',
    	JSON.stringify(nData, null, 2)
	);
	var transport = nodemailer.createTransport({
    	host: "smtp.mailtrap.io",
    	port: 2525,
        secure: false,
    	auth: {
      	user: "dd8c9936bfc4bc",
      	pass: "19c18db65475cf"
    	}
	});
	var mailOptions = {
    	from: 'registro@empresa.com',
    	to: email,
    	subject: 'Bienvenido Nuevo Usuario',
    	html: `<p>Hola</p>`
	}
	console.log(mailOptions);
	transport.sendMail(mailOptions, (error, info) => {
    	if (error) {
        	return console.log(error);
    	}
    	console.log('Message sent: %s', info.messageId);
	});
	//console.log("Message sent: %s", info.messageId);
	console.log('nUsuario', nUsuario);
	res.json(nUsuario);
}


function listar(){
    return usuarios;
};

function buscarPorId(id){
    const usuario = usuarios.find(elem=>elem.id == id);
    return usuario;
};

module.exports = {
    registrar,
    listar,
    buscarPorId
};