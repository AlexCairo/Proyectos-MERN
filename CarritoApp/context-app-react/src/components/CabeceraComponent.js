import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate, Link } from "react-router-dom";

function CabeceraComponent(){
    const {nombre,logout} = useContext(UserContext);
    const {lista} = useContext(CarritoContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid"> 
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/principal' className="nav-link">Principal</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/productos' className="nav-link">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/carrito' className="nav-link">Carrito</Link>
                    </li>
                    {nombre && (
                    <li className="nav-item">
                        <Link to='/historial' className="nav-link">Historial</Link>
                    </li>
                    )}
                </ul>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <span className="nav-link text-dark">{lista.length} productos</span>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link text-dark">{nombre || 'Invitado'}</span>
                    </li>   
                    <li className="nav-item">
                        {nombre?
                        (<button onClick={handleLogout} className="btn btn-primary">Logout</button>):
                        (<Link to="/" className="btn btn-primary">Login</Link>)}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default CabeceraComponent;