const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/restaurante-g1")
.then(()=>{
	console.log("Conectados a la base de datos");
})
.catch((error)=>{
	console.log("Error al conectar DB: ", error);
});

const auth = require("./middlewares/auth");
const categoriaRutas = require("./routes/categoria.route");
const usuarioRutas = require("./routes/usuario.route");
const platoRutas = require("./routes/plato.route");
const pedidoRutas = require("./routes/pedido.route");
const cocinaRutas = require("./routes/cocina.route");

const app = express();
app.use(express.json({limit:"2mb"}));
app.use(cors());
app.use(express.static("public"));

app.use("/api/usuarios", usuarioRutas);
app.use(auth);
app.use("/api/categorias", categoriaRutas);
app.use("/api/platos", platoRutas);
app.use("/api/pedidos", pedidoRutas);
app.use("/api/cocina", cocinaRutas);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
	cors: {
  		origin: "*"
	}
});

io.on("connection", (socket)=>{
	console.log("Conectado");
	socket.on("channel-cocina-pedido", (mensaje)=>{
    	console.log("Mensaje del mozo: ", mensaje);
    	io.emit("channel-cocina-pedido", mensaje);
	});
	socket.on("channel-cocina-entrega", (mensaje)=>{
    	console.log("Mensaje desde la cocina: ", mensaje);
    	io.emit("channel-cocina-entrega", mensaje);
	});
});

httpServer.listen(3001, ()=>{
	console.log("Servidor iniciado en el puerto 3001");
});

