import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import Swal from 'sweetalert2'

function ProductoListadoPage(){
    const {agregar} = useContext(CarritoContext);
    const productos = [
        {id:1, nombre:'Diseño Web', precio:500},
        {id:2, nombre:'Javascript', precio:600},
        {id:3, nombre:'React.js', precio:900},
        {id:4, nombre:'Angular', precio:800},
        {id:5, nombre:'Vue.js', precio:800},
        {id:6, nombre:'Django', precio:1000},
        {id:7, nombre:'Laravel', precio:1000},
        {id:8, nombre:'Node.js', precio:1200},
        {id:9, nombre:'MongoDB', precio:900},
        {id:10, nombre:'MySQL', precio:600}
    ];
    const handleAddProduct = (elem) => {
        agregar(elem);
        Swal.fire({
            icon: 'success',
            title: `Hemos agregado ${elem.nombre} al carrito!`,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0d6efd'
        });
    };
    return(
        <div className="container mt-3">
            <h1>Producto Listado</h1>
            <div className="row">
            {productos.map(elem=>(
                <div key={elem.id} className="col-md-3 mb-3">
                    <div className="card">
                        <img src="https://via.placeholder.com/150x100?text=producto" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{elem.nombre}</h5>
                            <p className="card-text">$ {elem.precio}</p>
                            <button onClick={()=>handleAddProduct(elem)} className="btn btn-primary w-100"><i className="bi bi-cart-plus"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ProductoListadoPage;