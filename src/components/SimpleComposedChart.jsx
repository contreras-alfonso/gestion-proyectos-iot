import React from 'react'
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export const SimpleComposedChart = () => {

    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];

  return (
    <div className='mt-5 p-5 rounded-lg bg-white'>
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
            <XAxis dataKey="name" tick={{ fontSize: 14,angle: 0 }}/>
            <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }}  tick={{ fontSize: 14,angle: -10 }}/>
            <CartesianGrid strokeDasharray={"2"}/> 
            <Tooltip contentStyle={{ fontSize: 13 }} itemStyle={{ fontSize: 13 }}/>
            <Area type="monotone" dataKey="amt" fill="#dbeafe" stroke="#38bdf8" />
            <Bar dataKey="pv" barSize={20} fill="#818cf8" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
  )
}
