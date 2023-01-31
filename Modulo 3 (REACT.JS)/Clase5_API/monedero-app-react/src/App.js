import { useState, useEffect } from 'react';
import { 
  listarRegistros, 
  guardarRegistro, 
  eliminarRegistro 
} from './services/RegistroService';

const initData = {
  _id: "",
  descripcion: "",
  tipo: "",
  monto: ""
}

function App() {
  const [lista, setLista] = useState([]);
  const [datos , setDatos]= useState(initData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nDatos = {...datos, [name]: value};
    setDatos(nDatos);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(datos);
    const result = await guardarRegistro(datos);
    setDatos(initData);
    listar();
  }

  const listar = async () => {
    const result = await listarRegistros();
    setLista(result.data);
  }

  const handleDelete = async (id) => {
    if(window.confirm('Desea eliminar este registro?')){
      const result = await eliminarRegistro(id);
      listar();
    }
  }

  useEffect(()=>{
    listar();
  },[]);

  return (
    <div className="container">
      <h1 className="mt-3">MonederoApp</h1>
      <div className="row">
        <div className="col-md-4">
          <h3>Nuevo</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="tipoInput" className="form-label">Tipo</label>
              <select onChange={handleChange} className="form-select" name="tipo" id="tipoInput" value={datos.tipo} required >
                <option value="">Selecciona una opción</option>
                <option value="E">Entrada</option>
                <option value="S">Salida</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="descripcionInput" className="form-label">Descripción</label>
              <input onChange={handleChange} type="text" className="form-control" name="descripcion" id="descripcionInput" value={datos.descripcion} required />
            </div>
            <div className="mb-3">
              <label htmlFor="montoInput" className="form-label">Monto</label>
              <input onChange={handleChange} type="text" className="form-control" name="monto" id="montoInput" value={datos.monto} required />
            </div>
            <div className="mb-3">
              <button type="submit" className='btn btn-primary'>Guardar</button>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <h3>Lista de registros</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Monto</th>
                <th>Tipo</th>
                <th>Fecha Creación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {lista.map((item)=>(
              <tr key={item._id}>
                <td>{item.descripcion}</td>
                <td>{item.monto}</td>
                <td>{item.tipo}</td>
                <td>{item.fecha_creacion}</td>
                <td>
                  <button className="btn btn-info me-1">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
