import React, { createContext, useEffect, useState } from 'react'

const PlantasContext = createContext();

const PlantasProvider = ({children}) => {

    const [plantas,setPlantas] = useState([]);
    const [planta,setPlanta] = useState({})

    useEffect(()=>{
        const obtenerPlantas = async () => {
            const url = `http://localhost:3000/plantas/getAll`;
            const response = await fetch(url);
            const data = await response.json();

        }

        obtenerPlantas();
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
        }}>
            {children}
        </PlantasContext.Provider>
    )
}

export{
    PlantasProvider
}
export default PlantasContext
