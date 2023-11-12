import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleDashedLinea = () => {

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
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="age" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
