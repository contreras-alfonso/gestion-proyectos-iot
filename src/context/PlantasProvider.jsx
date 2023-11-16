import React, { createContext, useEffect, useState } from 'react'

const PlantasContext = createContext();

const PlantasProvider = ({children}) => {

    const [plantas,setPlantas] = useState([]);
    const [planta,setPlanta] = useState({})
    const [imagenesPlantas,setImagenesPlantas] = useState([]);
    const [modalAgregarPlanta,setModalAgregarPlanta] = useState(false);

    useEffect(()=>{
        const obtenerImagenesPlantas = async () => {
            const url = `http://localhost:3000/imagenesPlantas/getAll`;
            const response = await fetch(url);
            const data = await response.json();
            setImagenesPlantas(data);
        }

        obtenerImagenesPlantas();
    })

    const agregarPlanta = async (infPlanta) => {
        const url = `http://localhost:3000/plantas/add`;
        const headers = {
            'Content-Type':'application/json',
        }
        const response = await fetch(url,{
            headers,
            body: JSON.stringify(infPlanta)
        });
        const data = await response.json();
    }

    return(
        <PlantasContext.Provider value={{
           plantas,
           planta,
           imagenesPlantas,
           modalAgregarPlanta,
           setModalAgregarPlanta
        }}>
            {children}
        </PlantasContext.Provider>
    )
}

export{
    PlantasProvider
}
export default PlantasContext
