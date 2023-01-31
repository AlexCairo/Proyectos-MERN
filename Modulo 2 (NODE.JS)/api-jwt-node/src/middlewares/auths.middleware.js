const jwt = require('jsonwebtoken');
const config = require('../config')

const verifyToken = (req,res,next)=>{
	const authHeader = req.headers.authorization;
	const token = authHeader && authHeader.split(' ')[1];
	if(token==null){
		return res.status(403).send('Token requerido');
	}else{
		jwt.verify(token,config.SECRET_KEY,(err,payload)=>{
			if(err) return res.status(401).send('Token inválido');
			next();
		});
	}
	next();
};

module.exports = verifyToken;