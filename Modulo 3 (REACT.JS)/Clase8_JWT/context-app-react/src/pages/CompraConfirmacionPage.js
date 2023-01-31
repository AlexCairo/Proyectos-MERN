import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { actualizarVentaService } from '../services/VentaService';

function ConfirmacionPage(){

    const [searchParams,_setSearchParams] = useSearchParams();
    const [respuesta,setRespuesta] = useState({
        'titulo': 'Ocurrió un error',
        'mensaje': 'Tu compra no se ha podido realizar'
    });

    useEffect(()=>{
        const sendData  = async() =>{
            try {
                const payment_id = searchParams.get('payment_id');
                const status = searchParams.get('status');
                const external_reference = searchParams.get('external_reference');
                const datos = {
                    id: external_reference,
                    transaccion: payment_id
                };
                if(status==='approved'){
                    datos.estado = 'P';
                    setRespuesta({
                        'titulo' : 'Compra Completada',
                        'mensaje': 'Tu compra se ha realizado satisfactoriamente'
                    });
                }
                console.log('datos => ', datos);
                await actualizarVentaService(datos);
            } catch (error) {
                console.log(error);
                window.alert('Error');
            }
        }
        sendData();
    },[]);

    return(
        <div className="container mt-3">
            <h1 className="mb-4">Confirmación de Pago</h1>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="text-center">
                    <i className="bi bi-truck text-primary mb-4" style={{fontSize:'5em'}}></i>
                    <h1>{respuesta.titulo}</h1>
                    <div className="row">
                        <div className="col-lg-7 mx-auto">
                            <p className="text-muted mb-4">{respuesta.mensaje}</p>
                        </div>
                    </div>
                    <Link className="btn btn-primary" to="/productos">
                        Seguir comprando
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ConfirmacionPage;