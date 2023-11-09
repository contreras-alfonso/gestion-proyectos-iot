import React, { useEffect, useState } from 'react'
import { ContainerDataTable } from '../components/ContainerDataTable';


export const Layouts = () => {

    const [users,setUsers] = useState([]);


    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
        },
        {
            name: 'Name',
            selector: row => row.title,
        },
        {
            name: 'Username',
            selector: row => row.title,
        },

    ];
    
    useEffect(()=>{
        const getUsuario = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setUsers(data);
        }
        getUsuario();

    },[])

  return (
    <>
      
        <div className='p-10'>
            <h1 className='text-xl uppercase font-black mb-5'>Layouts</h1>
            <ContainerDataTable columns={columns} data={users}/>
        </div>
    </>
  )
}
