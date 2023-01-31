const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = require("../config");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    if(token==null){
        return res.status(401).send("Token requerido");
    }
    jwt.verify(token, TOKEN_KEY, (err, result)=>{
        if(err){
            return res.status(403).send("Token inválido")
        }
        console.log(result);
        req.datos = result;
        next();
    });
};

module.exports = verifyToken;