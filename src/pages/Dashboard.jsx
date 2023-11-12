import React, { useEffect, useState } from 'react'
import { Navegacion } from '../components/Navegacion';
import { CardInfo } from '../components/CardInfo';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { Spinner } from '../components/Spinner';
import { SimpleBarChart } from '../components/SimpleBarChart';

export const Dashboard = () => {
    
    const [spinner,setSpinner] = useState(false);

    const infCards = [
        {
            text: 'Total Plants',
            numberMax: 8,
            simbol: '+',
            bgColor: 'bg-emerald-100',
            icon: <i className="fa-sharp fa-regular fa-leaf text-emerald-500"></i>,
        },
        {
            text: 'The weather',
            numberMax: 38,
            simbol: '°C',
            bgColor: 'bg-blue-100',
            icon: <i className="fa-regular fa-cloud text-blue-500"></i>,
        },
        {
            text: 'The reporters',
            numberMax: 18232,
            simbol: '+',
            bgColor: 'bg-pink-100',
            icon: <i className="fa-regular fa-circle-exclamation text-pink-500"></i>,
        },
        {
            text: 'Humedad del ambiente',
            numberMax: 18232,
            simbol: '+',
            bgColor: 'bg-pink-100',
            icon: <i className="fa-regular fa-circle-exclamation text-pink-500"></i>,
        }
    ]

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
            setSpinner(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setUsers(data);
            setTimeout(() => {
                setSpinner(false)
            }, 1000);
        }
        getUsuario();

    },[])

  return (
    <>
        {/* <div className='bg-white py-5 px-5  flex justify-end items-center gap-5'>
            <i class="fa-sharp fa-regular fa-bell text-xl text-gray-500"></i>
            <img src="https://preview.keenthemes.com/metronic8/demo1/assets/media/avatars/300-3.jpg" className='w-9 rounded-md' alt="" />
        </div> */}

        <div className=''>
            <h1 className='text-xl uppercase font-black mb-5'>Dashboard</h1>
            <div className='flex  gap-5'>
                <div className='flex flex-wrap gap-5 mb-5'>
                    {infCards.map(e=>(
                        <CardInfo key={e.text} info={e}/>
                    ))}
                </div>

                
            </div>
            <SimpleBarChart/>

            {/* <div className='p-7 bg-white rounded-lg shadow w-full'>
                <div className='mb-5 flex items-center justify-between'>
                    <h2 className='font-semibold'>Best Seller</h2>
                    <div className='flex'>
                        <button className='text-xs bg-emerald-100 text-emerald-600 py-2 px-3 rounded-lg'>Today</button>
                        <button className='text-xs  text-gray-600 py-2 px-3 rounded-lg'>Week</button>
                        <button className='text-xs text-gray-600 py-2 px-3 rounded-lg'>Month</button>
                    </div>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className=''>
                            <td className='uppercase text-xs text-gray-600 py-3'>Seller Name</td>
                            <td className='uppercase text-xs text-gray-600 py-3'>Company</td>
                            <td className='uppercase text-xs text-gray-600 py-3'>Product</td>
                            <td className='uppercase text-xs text-gray-600 py-3'>Revenue</td>
                            <td className='uppercase text-xs text-gray-600 py-3'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=''>
                            <td className='text-xs font-medium py-3'>Robert Clinton</td>
                            <td className='text-xs py-3'>Samsung</td>
                            <td className='text-xs py-3'>Smart Phone</td>
                            <td className='text-xs py-3'>S/ 38,536</td>
                            <td className='text-xs py-3'>Done</td>
                        </tr>
                        <tr className=''>
                            <td className='text-xs font-medium py-3'>Robert Clinton</td>
                            <td className='text-xs py-3'>Samsung</td>
                            <td className='text-xs py-3'>Smart Phone</td>
                            <td className='text-xs py-3'>S/ 38,536</td>
                            <td className='text-xs py-3'>Done</td>
                        </tr>
                        <tr className=''>
                            <td className='text-xs font-medium py-3'>Robert Clinton</td>
                            <td className='text-xs py-3'>Samsung</td>
                            <td className='text-xs py-3'>Smart Phone</td>
                            <td className='text-xs py-3'>S/ 38,536</td>
                            <td className='text-xs py-3'>Done</td>
                        </tr>
                        <tr className=''>
                            <td className='text-xs font-medium py-3'>Robert Clinton</td>
                            <td className='text-xs py-3'>Samsung</td>
                            <td className='text-xs py-3'>Smart Phone</td>
                            <td className='text-xs py-3'>S/ 38,536</td>
                            <td className='text-xs py-3'>Done</td>
                        </tr>
                        <tr className=''>
                            <td className='text-xs font-medium py-3'>Robert Clinton</td>
                            <td className='text-xs py-3'>Samsung</td>
                            <td className='text-xs py-3'>Smart Phone</td>
                            <td className='text-xs py-3'>S/ 38,536</td>
                            <td className='text-xs py-3'>Done</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
            <ContainerDataTable data={users} columns={columns}/>
            
        </div>

        {spinner && <Spinner/>}
    </>
  )
}
