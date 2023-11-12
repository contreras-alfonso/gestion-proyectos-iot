import React, { useEffect, useState } from 'react'
import { ContainerDataTable } from './ContainerDataTable';
import { Toggle } from './Toggle';
import { SimpleBarChart } from './SimpleBarChart';
import { SimpleAreaChart } from './SimpleAreaChart';
import { SimpleDashedLinea } from './SimpleDashedLinea';
import { SimpleComposedChart } from './SimpleComposedChart';

export const TabDispositivos = () => {

    const colors = ["Dispositivo 1","Dispositivo 2","Dispositivo 3","Dispositivo 4","Dispositivo 5","Dispositivo 6","Dispositivo 7",]

    const [enabled, setEnabled] = useState(false)

    const [toggle,setToggle] = useState("Dispositivo 1");
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
    <div className=''>
       
        <ul className='flex justify-center rounded-full bg-white shadow-lg p-1 mb-5'>
        {
            colors.map(color=>{
                return (
                    <li key={crypto.randomUUID()} className={`w-1/3 text-xs flex items-center justify-center gap-2 rounded-full text-center cursor-pointer py-3 px-5 ${toggle==color ? 'bg-emerald-200 text-emerald-500  shadow-xl' : 'bg-emerald-500 text-white hover:bg-white duration-500'}`} onClick={()=>{setToggle(color)}}>{color}</li>
                )
            })

        }
        </ul>

        {colors.map((color, index) => (
            <div key={crypto.randomUUID()} className={`w-full ${toggle===color ? 'inline-block' : 'hidden'}`}>
                <Toggle enabled={enabled} setEnabled={setEnabled}/>
                <SimpleComposedChart/>
                <ContainerDataTable columns={columns} data={users}/>
            </div>
        ))}
    </div>
  )
}
