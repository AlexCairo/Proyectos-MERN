
const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const {
    schemaDatosUsuario,
} = require('../schemas/usuario.schema');
const controller = require('../controllers/usuario.controller');

router.get('/listar', (req, res)=>{
    res.json(controller.listar());
});

router.post('/crear', 
    validator.body(schemaDatosUsuario), 
    (req, res, next)=>{
        if(req.body.rol!='admin'){
            res.status(401).send('No tienes privilegios');
        }else{
            
            next();
        }
    },
    (req, res)=>{
        res.json(controller.crear(req.body));
    });

module.exports = router;
