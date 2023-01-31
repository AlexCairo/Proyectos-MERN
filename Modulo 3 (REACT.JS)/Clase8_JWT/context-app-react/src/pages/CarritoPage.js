import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { CarritoContext } from "../context/CarritoContext";
import { mercadopagoVentaService } from "../services/VentaService";
import Swal from 'sweetalert2'

function CarritoPage(){
    const {idUser} = useContext(UserContext);
    const {lista,quitar} = useContext(CarritoContext);
    const [total, setTotal] = useState(0);
    useEffect(()=>{
        const initValue = 0;
        const nTotal = lista.reduce((previousValue, currentObj) => {
            return previousValue + currentObj.precio;
        }, initValue);
        setTotal(nTotal);
    },[lista]);
    const handleDeleteProduct = (elem) => {
        Swal.fire({
            title: `Deseas eliminar ${elem.nombre}?`,
            text: "Este proceso no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, eliminar el producto!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                quitar(elem.id);
                Swal.fire({
                    icon: 'success',
                    title: 'Producto eliminado!',
                    confirmButtonText: 'Aceptar',
                    confirmButtonColor: '#0d6efd'
                });
            }
        });
    };
    const handlePayment = () => {
        console.log(idUser)
        Swal.fire({
            title: `Pagar el importe de $ ${total}`,
            text: "Este proceso no se puede revertir!",
            showCancelButton: true,
            confirmButtonColor: '#0d6efd',
            cancelButtonColor: '#6c757d',
            confirmButtonText: 'Sí, proceder con el pago!',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Nos redireccionamos a la pasarela de pagos
                console.log('redireccionamiento a la pasarela');
                try {
                    const venta = {
                        cliente_id: idUser,
                        total,
                        detalle: lista.map(item=>{
                            return {
                                producto: item.nombre,
                                precio: item.precio,
                                cantidad: 1
                            }
                        })
                    };
                    console.log('Venta => ', venta);
                    const result = await mercadopagoVentaService(venta);
                    const data = result.data;
                    window.location.replace(data.url);
                } catch (error) {
                    console.log(error);
                    window.alert('Ocurrió un error');
                }
            }
        });
    };
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <h3>Carrito</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map(elem=>(
                                <tr key={elem.id}>
                                    <td>{elem.nombre}</td>
                                    <td>$ {elem.precio}</td>
                                    <td>
                                        <button onClick={()=>handleDeleteProduct(elem)} className="btn btn-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <h3>Detalle Compra</h3>
                    <h4>Total: $ {total}</h4>
                    <button onClick={handlePayment} className="btn btn-success w-100" disabled={(total>0 && idUser)?false:true}>Pagar</button>
                </div>
            </div>
        </div>
    );
}

export default CarritoPage;