import React, { createContext, useEffect, useState } from 'react'

const DispositivosContext = createContext();

const DispositivosProvider = ({children}) => {
    const [dispositivos,setDispositivos] = useState([]);
    const [dispositivo,setDispositivo] = useState({});

    useEffect(()=>{
        const obtenerDispositivos = async () => {
            const url = `http://localhost:3000/dispositivos/getAll`; 
            const response = await fetch(url);
            const data = await response.json();
            setDispositivos(data);
        }

        obtenerDispositivos();
    },[])

    const obtenerDispositivo = async (id) => {
        const url = `http://localhost:3000/dispositivos/get/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setDispositivo(data);
    }

    const desvincularDispositivo = async (infoDispositivo) => {
        const url = `http://localhost:3000/dispositivos/updateDispositivo`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            method: 'put',
            body: JSON.stringify(infoDispositivo)
        });
        const data = await response.json();
        return data;

    }

    const actualizarEstadoDispositivo = async (infoDispositivo) => {
        const url = `http://localhost:3000/dispositivos/updateEstadoDispositivo`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            method: 'put',
            body: JSON.stringify(infoDispositivo)
        });
        const data = await response.json();
        return data;
    }

    const asignarPlantaDispositivo = async (info) => {
        const url = `http://localhost:3000/dispositivos/updateAsignarPlantaDispositivo`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            method: 'put',
            body: JSON.stringify(info)
        });
        const data = await response.json();
        return data;
    }

    return (
        <DispositivosContext.Provider value={{
            dispositivo,
            dispositivos,
            obtenerDispositivo,
            desvincularDispositivo,
            actualizarEstadoDispositivo,
            asignarPlantaDispositivo,
         }}>
             {children}
         </DispositivosContext.Provider>
    )
}

export {
    DispositivosProvider
}

export default DispositivosContext