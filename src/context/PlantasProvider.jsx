import React, { createContext, useEffect, useState } from 'react'

const PlantasContext = createContext();

const PlantasProvider = ({children}) => {

    const [plantas,setPlantas] = useState([]);
    const [planta,setPlanta] = useState({})
    const [imagenesPlantas,setImagenesPlantas] = useState([]);
    const [modalAgregarPlanta,setModalAgregarPlanta] = useState(false);

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

    return(
        <PlantasContext.Provider value={{
           plantas,
           planta,
           imagenesPlantas,
           modalAgregarPlanta,
           setModalAgregarPlanta,
           agregarPlanta,
           agregarPlantaState,
        }}>
            {children}
        </PlantasContext.Provider>
    )
}

export{
    PlantasProvider
}
export default PlantasContext
