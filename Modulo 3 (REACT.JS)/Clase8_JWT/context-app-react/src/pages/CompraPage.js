import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { listarVentasPorClienteService } from "../services/VentaService";

import ReactExport from "@ibrahimrahmani/react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function CompraPage(){
    const { idUser } = useContext(UserContext);
    const [lista, setLista] = useState([]);
    const listar = async () => {
        try {
            const result = await listarVentasPorClienteService(idUser);
            setLista(result.data);
        } catch (error) {
            console.log('Error listado', error)
        }
    };
    useEffect(()=>{
        listar();
    }, []);
    return(
        <div className="container mt-3">
            <div className="d-flex justify-content-between">
                <h1>Historial de Compras</h1>
                <ExcelFile element={<button className="btn btn-success">Exportar Compras <i className="bi bi-file-earmark-excel-fill"></i></button>}>
                    <ExcelSheet data={lista} name="Compras">
                        <ExcelColumn label="Fecha" value="fecha"/>
                        <ExcelColumn label="Total" value="total"/>
                        <ExcelColumn 
                            label="Estado"
                            value={(col) => col.estado==='P' ? "Pendiente" : (col.estado==='E' ? 'Entregado' : 'Anulado')} 
                        />
                    </ExcelSheet>
                </ExcelFile>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {lista.map(elem=>(
                        <tr key={elem._id}>
                            <td>{elem.fecha}</td>
                            <td>{elem.total}</td>
                            <td>{elem.estado}</td>
                            <td>
                                <button className="btn btn-info">Detalle</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompraPage;