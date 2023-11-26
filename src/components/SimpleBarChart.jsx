import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleBarChart = ({data}) => {  

  return (
    <>
        <div className='bg-white pr-5 pt-5 pb-5 rounded-lg shadow'>
        <h2 className='font-semibold text-center mb-5 py-3 rounded-lg '>Gráfica Humedad y Temperatura</h2>
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
                    <XAxis dataKey="fechaYhora" tick={{ fontSize: 14,angle: 0 }} />
                    <YAxis tick={{ fontSize: 14 ,angle: 0}} />
                    <Tooltip contentStyle={{ fontSize: 13 }} itemStyle={{ fontSize: 13 }} />
                  
                    
                    <Area type={"monotone"} dataKey="temperatura" stackId={"1"} stroke='#10B981' fill="#CAF5E7"/>
                    <Area type={"monotone"} dataKey="humedadAmbiente" stackId={"1"} stroke='#F46D71' fill="#FBEEE6"/>
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
