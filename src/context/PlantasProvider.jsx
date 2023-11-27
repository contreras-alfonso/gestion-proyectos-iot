import React, { createContext, useEffect, useState } from 'react'

const PlantasContext = createContext();

const PlantasProvider = ({children}) => {

    const [plantas,setPlantas] = useState([]);
    const [planta,setPlanta] = useState({})
    const [imagenesPlantas,setImagenesPlantas] = useState([]);
    const [modalAgregarPlanta,setModalAgregarPlanta] = useState(false);
    const [modalEditarPlanta,setModalEditarPlanta] = useState(false);

    useEffect(()=>{
        const obtenerPlantas = async () => {
            const url = `${import.meta.env.VITE_RUTA_BACKEND}/plantas/getAll`; 
            const response = await fetch(url);
            const data = await response.json();
            setPlantas(data);
        }

        obtenerPlantas();

        const obtenerImagenesPlantas = async () => {
            const url = `${import.meta.env.VITE_RUTA_BACKEND}/imagenesPlantas/getAll`; 
            const response = await fetch(url);
            const data = await response.json();
            setImagenesPlantas(data);
        }

        obtenerImagenesPlantas();
    },[])

    const agregarPlantaState = (infPlanta) => {
        const copyPlantas = [...plantas];
        copyPlantas.push(infPlanta);
        setPlantas(copyPlantas);
    }

    const agregarPlanta = async (infPlanta) => {
        const url = `${import.meta.env.VITE_RUTA_BACKEND}/plantas/add`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            body: JSON.stringify(infPlanta),
            method: 'POST'
        });
        const data = await response.json();
        return data;
    }

    const editarPlanta = async (infPlanta) => {
        const url = `${import.meta.env.VITE_RUTA_BACKEND}/plantas/edit`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            body: JSON.stringify(infPlanta),
            method: 'PUT'
        });
        const data = await response.json();
        return data;
    }

    const editarPlantaState = (dataPlanta) => {
        let copyPlantas = [...plantas];
        copyPlantas = copyPlantas.map(e=>e._id === dataPlanta._id ? dataPlanta : e);
        setPlantas(copyPlantas);
    }

    return(
        <PlantasContext.Provider value={{
           plantas,
           planta,
           setPlanta,
           imagenesPlantas,
           modalAgregarPlanta,
           setModalAgregarPlanta,
           modalEditarPlanta,
           setModalEditarPlanta,
           agregarPlanta,
           agregarPlantaState,
           editarPlanta,
           editarPlantaState,
        }}>
            {children}
        </PlantasContext.Provider>
    )
}

export{
    PlantasProvider
}
export default PlantasContext
