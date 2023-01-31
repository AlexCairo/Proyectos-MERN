import { useState, useEffect, useRef } from "react";
import { 
  listarHeroes,
  guardarHeroe,
  mostrarHeroe,
  editarHeroe,
  eliminarHeroe
} from "./services/HeroeService";
import Swal from 'sweetalert2'

const initData = {
  _id: "",
  nombre: "",
  imagen: "",
  imagen64: ""
}

function App() {
  const [titulo, setTitulo] = useState('Nuevo');
  const [lista, setLista] = useState([]);
  const [datos, setDatos] = useState(initData);
  const fileRef = useRef();
  const imgRef = useRef();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nDatos = {...datos, [name]: value};
    setDatos(nDatos);
  }

  const convertBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file); // convierte el archivo a base64
    reader.onload = function(){
      cb(reader.result); // De devuelve el código en base64
    }
    reader.onerror = function(error){
      console.log('Error convertBase64', error)
    }
  }

  const handleFileChange = (e) => {
    let file = e.target.files[0];
    convertBase64(file, (result)=>{
      console.log('result => ', result);
      // Asignamos una previsualización de la imagen adjunta
      imgRef.current.src = result; 
      let data64 = result.split(',')[1];
      console.log('data64 => ', data64);
      let nDatos = {
        ...datos, 
        imagen: file.name,
        imagen64: data64
      }
      setDatos(nDatos);
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('datos => ', datos);
    if(datos._id){
      console.log('Editando el registro');
      const result = await editarHeroe(datos);
      const nHeroe = result.data;
      console.log('handleSubmit editarHeroe => ', nHeroe);
      // Actualizamos un elemento de la lista
      const nLista = lista.map(elem => elem._id===datos._id ? nHeroe : elem);
      setLista(nLista)
    }else{
      console.log('Creando el registro');
      const result = await guardarHeroe(datos);
      const heroe = result.data;
      console.log('handleSubmit guardarHeroe => ', heroe);
      const nLista = [...lista, heroe];
      setLista(nLista);
    }
    // Limpiamos el formulario
    handleCancel();
  }

  const listar = async () => {
    const result = await listarHeroes();
    setLista(result.data);
  }

  const handleShow = async (id) => {
    const result = await mostrarHeroe(id);
    const heroe = result.data;
    console.log('heroe => ', heroe);
    setTitulo('Editar');
    setDatos(heroe);
    imgRef.current.src = `http://localhost:3001/img/${heroe.imagen}`;
  };

  const handleCancel = () => {
    // Limpiamos el formulario
    setTitulo('Nuevo'); // Mostramos el título por defecto
    setDatos(initData); // Limpiamos la caja de texto
    imgRef.current.src = '/default.png'; // Mostramos la imagen por defecto
    fileRef.current.value = ''; // Limpiamos el elemento para adjuntar un archivo
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Desea eliminar este heroe?',
      text: "Esta accion no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí eliminar!',
      cancelButtonText: 'No, cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await eliminarHeroe(id);
        handleCancel();
        const nLista = lista.filter(elem=>elem._id!==id);
        setLista(nLista);
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado',
          'success'
        )
      }
    });
  }

  useEffect(()=>{
    listar();
  },[]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-3">
          <h1>{titulo} Héroe</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" onChange={handleChange} name="nombre" value={datos.nombre} className="form-control" placeholder="Nombre" required />
            </div>
            <div className="mb-3">
              <div>
                <img src="/default.png" ref={imgRef} className="img-fluid" alt="imagen" />
              </div>
              <label className="form-label">Imagen</label>
              <input onChange={handleFileChange} ref={fileRef} className="form-control" type="file" />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary w-100">Guardar</button> 
              <div className="mb-2"></div>
              <button onClick={handleCancel} type="button" className="btn btn-secondary w-100">Cancelar</button>
            </div>
          </form>
        </div>
        <div className="col-md-9">
          <h1>Lista de Héroes</h1>
          <div className="row">
          {lista.map((heroe)=>(
            <div key={heroe._id} className="col-md-3">
              <div className="card">
                <img src={"http://localhost:3001/img/"+heroe.imagen} className="card-img-top" alt={heroe.imagen} />
                <div className="card-body">
                  <h5 className="card-title">{heroe.nombre}</h5>
                  <div className="btn-group w-100">
                    <button onClick={()=>handleShow(heroe._id)} type="button" className="btn btn-info w-50">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button onClick={()=>handleDelete(heroe._id)} type="button" className="btn btn-danger w-50">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
