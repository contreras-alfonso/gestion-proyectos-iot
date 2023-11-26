import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user,setUser] = useState();
    const [cargando,setCargando] = useState(true);

    const login = async (dataUser) => {
        const url = `${import.meta.env.VITE_RUTA_BACKEND}/users/login`;
        const headers = {
            'Content-Type': 'application/json',
        }
        const response = await fetch(url,{
            method:'post',
            headers,
            body: JSON.stringify(dataUser),
        })

        const data = await response.json();
        return data;
    }

    const verificarLogin = async () => {
        const token = localStorage.getItem('jwt');
        const headers = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer '+token,
        }
        const url = `${import.meta.env.VITE_RUTA_BACKEND}/users/get`;
        setCargando(true);
        const response = await fetch(url,{
            headers,
        })
        const data = await response.json();
        setCargando(false);
        return data;
        
    }

    return(
        <UserContext.Provider value={{
            login,
            verificarLogin,
            user,
            setUser,
            cargando,
            setCargando,
        }}>
            {children}
        </UserContext.Provider>
    )
}

export{
    UserProvider
}
export default UserContext