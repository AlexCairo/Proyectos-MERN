let lista = [
	{id:1, contacto:'Karen Vizcarra', destino:'Los Olivos', costo:'40.00', estado:'P'},
	{id:2, contacto:'Carlos Merino', destino:'San Borja', costo:'30.00', estado:'P'},
	{id:3, contacto:'Felipe Mendoza', destino:'SMP', costo:'24.00', estado:'P'},
	{id:4, contacto:'Hilda Linares', destino:'SJL', costo:'17.00', estado:'P'},
	{id:5, contacto:'Laura Bermudez', destino:'La Molina', costo:'60.00', estado:'P'},
	{id:6, contacto:'Miguel Santos', destino:'San Bartolo', costo:'120.00', estado:'P'},
	{id:7, contacto:'Roberto Gómez', destino:'Lince', costo:'20.00', estado:'P'},
	{id:8, contacto:'Silvio Pérez', destino:'Comas', costo:'70.00', estado:'P'},
	{id:9, contacto:'Alex Maguiña', destino:'Rímac', costo:'60.00', estado:'P'},
];

function listar(){
	return lista;
}

function buscarPorId(id){
	const servicio = lista.find(elem=>elem.id==id);
	return servicio;
}

function editarEstado(id, estado){
	const servicio = lista.find(elem=>elem.id==id);
	// P:pendiente E:entregado R:rechazado N:no encontrado
	servicio.estado = estado;
	return servicio;
}

module.exports = { listar, buscarPorId, editarEstado };
