import React, { useEffect, useState } from 'react'
import { Navegacion } from '../components/Navegacion';
import { CardInfo } from '../components/CardInfo';
import { ContainerDataTable } from '../components/ContainerDataTable';
import { Spinner } from '../components/Spinner';
import { SimpleBarChart } from '../components/SimpleBarChart';

export const Dashboard = () => {
    
    const [spinner,setSpinner] = useState(false);
    const [dataSensoresGrafica,setDataSensoresGrafica] = useState([]);
    const [dataSensoresTable,setDataSensoresTable] = useState([]);
    const [totalPlants,setTotalPlants] = useState();
    const [temperatura,setTemperatura] = useState();
    const [humedadSuelo,setHumedadSuelo] = useState();
    const [humedadAmbiente,setHumedadAmbiente] = useState();
    const [totalReports,setTotalReports] = useState();

    useEffect(()=>{
        const getDataDashboard = async () => {
            const url = `${import.meta.env.VITE_RUTA_BACKEND}/dashboard/getData`;
            const response = await fetch(url);
            const data = await response.json();
            setTotalPlants(data.plantasTotal);
            setTemperatura(data.temperatura);
            setHumedadSuelo(data.humedadSuelo);
            setHumedadAmbiente(data.humedadAmbiente);
            setTotalReports(data.cantidadReportes);
        }

        const getDataTable = async () => {
            const url = `${import.meta.env.VITE_RUTA_BACKEND}/sensores/getAll/65590aab8ef290c452993fb5`;
            const response = await fetch(url);
            const data = await response.json();
            setDataSensoresGrafica(data.dataSensoresGraficaMod)
            setDataSensoresTable(data.dataSensoresTableMod)
        }
        getDataTable();
        getDataDashboard();

    },[])

    const infCards = [
        {
            text: 'Sistemas Totales',
            numberMax: totalPlants,
            simbol: '+',
            bgColor: 'bg-emerald-100',
            icon: <i className="fa-regular fa-microchip text-emerald-500"></i>,
        },
        {
            text: 'La temperatura',
            numberMax: temperatura,
            simbol: '°C',
            bgColor: 'bg-cyan-100',
            icon: <i className="fa-regular fa-temperature-half text-cyan-500"></i>,
        },
        {
            text: 'Reportes totales',
            numberMax: totalReports,
            simbol: '+',
            bgColor: 'bg-pink-100',
            icon: <i className="fa-regular fa-circle-exclamation text-pink-500"></i>,
        },
        {
            text: 'Humedad del ambiente',
            numberMax: humedadAmbiente,
            simbol: '',
            bgColor: 'bg-blue-100',
            icon: <i className="fa-regular fa-cloud text-blue-500"></i>,
        },
        // {
        //     text: 'Humedad del suelo',
        //     numberMax: humedadSuelo,
        //     simbol: '.00',
        //     bgColor: 'bg-orange-100',
        //     icon: <i class="fa-sharp fa-regular fa-droplet-percent text-orange-500"></i>,
        // }
    ]

    const columns = [
        {
            name: '#Num',
            selector: row => row.numeroReporte,
        },
        {
            name: 'Humedad del ambiente',
            selector: row => row.humedadAmbiente,
        },
        {
            name: 'Humedad del suelo',
            selector: row => row.humedadSuelo,
        },
        {
            name: 'Temperatura',
            selector: row => row.temperatura,
        },
        {
          name: 'Fecha',
          selector: row => row.fechaYhora,
      },

    ];

  return (
    <>

        <div className=''>
            <h1 className='text-xl uppercase font-black mb-5'>Dashboard</h1>
            <div className='flex  gap-5'>
                <div className='flex flex-wrap gap-5 mb-5'>
                    {infCards.map(e=>(
                        <CardInfo key={e.text} info={e}/>
                    ))}
                </div>

                
            </div>
            <SimpleBarChart data={dataSensoresGrafica}/>
            <ContainerDataTable data={dataSensoresTable} columns={columns}/>
            
        </div>

        {/* {spinner && <Spinner/>} */}
    </>
  )
}
