import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 104010
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 245000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 670100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 528050
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 619000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 710000
        }
    ]
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
            <div className='flex flex-col justify-center items-center mt-5'>
                <LineChart width={350} height={250} data={data}>
                    <Line
                        type="monotone"
                        dataKey="sell"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <YAxis ></YAxis>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                </LineChart>
                <p className='text-indigo-700 text-lg font-semibold'>Sell in Months</p>
            </div>

            <div className='flex flex-col justify-center items-center mt-5'>
                <AreaChart
                    width={350}
                    height={250}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="revenue" stroke="#45bf72" fill="#84d8a3" />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />

                </AreaChart>
                <p className='text-indigo-700 text-lg font-semibold'>Investment vs Revenue</p>
            </div>

            <div className='flex flex-col justify-center items-center mt-5'>
                <BarChart
                    width={370}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                </BarChart>
                <p className='text-indigo-700 text-lg font-semibold'>Investment vs Revenue</p>
            </div>






        </div>

    );
};

export default Dashboard;