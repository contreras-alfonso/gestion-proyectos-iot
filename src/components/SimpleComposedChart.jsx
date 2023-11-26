import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleComposedChart = ({data}) => { 

  return (
    <div className='mt-5 p-5 rounded-lg bg-white'>
        <h2 className='font-semibold text-center py-3 rounded-lg'>Gráfica Humedad y Temperatura</h2>
        <ResponsiveContainer width="100%" aspect={3}>
            <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 80,
                bottom: 20,
                left: 20,
            }}
            >
            <XAxis dataKey={`fechaYhora`} tick={{ fontSize: 14,angle: 0 }}/>
            <YAxis label={{ angle: -90, position: 'insideLeft' }}  tick={{ fontSize: 14,angle: 0 }}/>
            <CartesianGrid strokeDasharray={"2"}/> 
            <Tooltip contentStyle={{ fontSize: 13 }} itemStyle={{ fontSize: 13 }}/>
            {/* <Area type="monotone" dataKey="humedadSuelo" fill="#dbeafe" stroke="#38bdf8" /> */}
            <Bar dataKey="humedadAmbiente" barSize={20} fill="#65b4ab" />
            <Line type="monotone" dataKey="temperatura" stroke="#f46d71" />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
  )
}
