import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function AuthGuard({ component: Component }){
    const { idUser } = useContext(UserContext);
    console.log('Auth: ', idUser);
    return idUser ? (
        <Component />
    ) : (
        <Navigate to='/' />
    );
}

export default AuthGuard;