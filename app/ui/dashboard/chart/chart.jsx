"use client"

import React from 'react'
import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {


  const data = [
    {
      name: 'Mon',
      visit: 2400,
      click: 2400,
    },
    {
      name: 'Tue',
      visit: 1398,
      click: 2210,
    },
    {
      name: 'wed',
      visit: 9800,
      click: 2290,
    },
    {
      name: 'Thu',
      visit: 3908,
      click: 2000,
    },
    {
      name: 'Fri',
      visit: 4800,
      click: 2181,
    },
    {
      name: 'Sat',
      visit: 3800,
      click: 2500,
    },
    {
      name: 'Sun',
      visit: 4300,
      click: 2100,
    },
  ];


  return (
    <div className={styles.container}>
      <h2>Weekly Recap</h2>
         <ResponsiveContainer width="100%" height="100%">
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor:'#151c2c', border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;