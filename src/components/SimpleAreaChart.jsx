import React from 'react'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleAreaChart = () => {

    const data = [
        {day: "05-01", age: 10, temperature: 60},
        {day: '05-04', age: 25, temperature: 70},
        {day: '05-06', age: 15, temperature: 65},
        {day: '05-09', age: 35, temperature: 85},
        {day: '05-09', age: 12, temperature: 48},
        {day: '05-03', age: 30, temperature: 69},
        {day: '05-15', age: 15, temperature: 78},
    ]

  return (
    <div>
        <ResponsiveContainer width="100%" aspect={3}>
            <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
                >
                <CartesianGrid strokeDasharray={"3 3"}/> 
                <XAxis dataKey="day" tick={{ fontSize: 14,angle: 0 }} />
                <YAxis tick={{ fontSize: 14 ,angle: -20}} />
                <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
                <Area dataKey="age" stroke="#8884d8" fill="#8884d8" />
                <Tooltip contentStyle={{ fontSize: 13 }} itemStyle={{ fontSize: 13 }}/>
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}
