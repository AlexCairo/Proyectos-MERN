import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/LoginService";
import Swal from 'sweetalert2';

function LoginPage(){
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({
        usuario: "",
        clave: ""
    });

    const handleChangeInput = (e) =>{
        const { id, value } = e.target;
        const nDatos = {...credenciales, [id]:value};
        setCredenciales(nDatos);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('credenciales => ', credenciales);
        try {
            const result = await loginService(credenciales);
            const data = result.data;
            console.log('Login result => ', data);
            login(data);
            navigate('/principal');
        } catch (error) {
            console.log('Error login');
            Swal.fire({
                title: 'Error',
                text: "Credenciales incorrectas!",
                icon: 'error',
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Aceptar'
            });
        }
    };
    return(
        <div className="container-fluid min-vh-100 d-flex flex-column">
            <main className="form-signin w-100 m-auto text-center">
                <form onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Por favor, registrese</h1>
                    <div className="form-floating">
                        <input type="email" onChange={handleChangeInput} className="form-control" id="usuario" placeholder="name@example.com" required />
                        <label htmlFor="usuario">Correo electrónico</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" onChange={handleChangeInput} className="form-control" id="clave" placeholder="Password" required />
                        <label htmlFor="clave">Contraseña</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recuérdame
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                </form>
            </main>
        </div>
    );
}

export default LoginPage;