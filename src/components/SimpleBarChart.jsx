import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleBarChart = () => {

    const [dataf,setDataf] = useState([]);

    const data = [
        {name: "María", age: 10, weight: 60},
        {name: 'Karina', age: 25, weight: 70},
        {name: 'Susana', age: 15, weight: 65},
        {name: 'Pedro', age: 35, weight: 85},
        {name: 'Felipe', age: 12, weight: 48},
        {name: 'Laura', age: 30, weight: 69},
        {name: 'Adrián', age: 15, weight: 78},
    ]

    useEffect(()=>{
        const getData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            const dataEsp = data.map(e=>{
                const {userId,id} = e;
                return {
                    userId,
                    id,
                }
            })
            setDataf(dataEsp);
        }
        getData()
    },[])


  return (
    <>
        {/* <div className='bg-white px-5 py-10 rounded-lg'>
            <ResponsiveContainer width="100%" aspect={2}>
                <BarChart 
                    data={data} 
                    width={500} 
                    height={300}
                    margin={{
                        top:5,
                        right:30,
                        left:20,
                        bottom:5
                    }}
                    
                    >
                    <CartesianGrid strokeDasharray={"4 1 2"}/> 
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="weight" stroke='#8884d8' fill="#8884d8"/>
                    <Bar dataKey="age" fill="#1ee3cf"/>
                </BarChart>
            </ResponsiveContainer>
        </div> */}

        <div className='bg-white pr-5 pt-5 pb-5 rounded-lg shadow'>
        <h2 className='font-black uppercase text-sm text-center mb-5 ml-5 py-3 rounded-lg '>Variación del clima</h2>
            <ResponsiveContainer width="100%" aspect={3}>
                <AreaChart 
                    data={data} 
                    width={500} 
                    height={400}
                    margin={{
                        top:10,
                        right:30,
                        left:20,
                        bottom:5
                    }}
                    
                    >
                    <CartesianGrid strokeDasharray={"3 3"}/> 
                    <XAxis dataKey="name" tick={{ fontSize: 14,angle: 0 }} />
                    <YAxis tick={{ fontSize: 14 ,angle: -20}} />
                    <Tooltip contentStyle={{ fontSize: 13 }} itemStyle={{ fontSize: 13 }} />
                  
                    {/* <Bar dataKey="weight" stroke='#8884d8' fill="#8884d8"/> */}
                    {/* <Bar dataKey="age" fill="#1ee3cf"/> */}
                    <Area type={"monotone"} dataKey="age" stackId={"1"} stroke='#3b82f6' fill="#dbeafe"/>
                    <Area type={"monotone"} dataKey="weight" stackId={"1"} stroke='#f472b6' fill="#ffe4e6"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>



        {/* <div className='bg-white px-5 py-10 rounded-lg'>
            <ResponsiveContainer width="100%" aspect={2}>
            <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="age" stroke="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" />
            <Legend/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

        </LineChart>
            </ResponsiveContainer>
        </div> */}
    </>

  )
}
