import React, { useState } from 'react';

const CarritoContext = React.createContext();
const { Provider } = CarritoContext;

function CarritoProvider({children}){
    const [lista, setLista] = useState([]);
    function agregar(producto){
        const nLista = [...lista, producto];
        setLista(nLista);
    }
    function quitar(id){
        console.log(id)
        const nLista = lista.filter(elem=>elem.id!==id);
        setLista(nLista);
    }
    return(
        <Provider value={{lista, agregar, quitar}}>
            {children}
        </Provider>
    );
}

export { CarritoProvider, CarritoContext };