import React, { useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";

const UserContext = React.createContext();
const { Provider } = UserContext;

function UserProvider({children}){
    const [idUser, setIdUSer] = useState(null);
    const [nombre, setNombre] = useState(null);
    const [token, setToken] = useState(localStorage.token);
    function login(data){
        const token = data.token;
        const decoded = jwt_decode(token);
        console.log('decoded => ', decoded);
        setToken(token);
        setIdUSer(decoded.userId);
        setNombre(decoded.user);
        localStorage.token = token;
    }
    function logout(){
        setNombre(null);
        setIdUSer(null);
        localStorage.removeItem('token');
    }
    useEffect(()=>{
        console.log('UserProvider useEffect');
        if(token){
            console.log('si hay token');
            try {
                const decoded = jwt_decode(token);
                setIdUSer(decoded.userId);
                setNombre(decoded.user);
            } catch (error) {
                console.log('Token inválido');
            }
        }
    }, []);
    return(
        <Provider value={{idUser, nombre, login, logout}}>
            {children}
        </Provider>
    );
}

export { UserProvider, UserContext };