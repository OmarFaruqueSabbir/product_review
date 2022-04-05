import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

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


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  mx-auto">
            <div className='flex flex-col justify-center items-center mt-5 mb-5'>
                <p className='text-indigo-700 text-lg font-semibold mb-3'>Sell in Months</p>
                <LineChart width={330} height={250} data={data}>
                    <Line
                        type="monotone"
                        dataKey="sell"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <YAxis ></YAxis>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <Legend />
                </LineChart>
            </div>

            <div className='flex flex-col justify-center items-center mt-5 mb-5'>
                <p className='text-indigo-700 text-lg font-semibold mb-3'>Investment vs Revenue</p>
                <AreaChart
                    width={330}
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
                    <Legend />
                    <Area type="monotone" dataKey="revenue" stroke="#45bf72" fill="#84d8a3" />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />

                </AreaChart>
            </div>

            <div className='flex flex-col justify-center items-center  mt-5 mb-5'>
                <p className='text-indigo-700 text-lg font-semibold mb-3'>Investment vs Revenue</p>
                <PieChart className='flex' width={300} height={250}>
                    <Pie data={data} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Legend />
                    <Tooltip />

                </PieChart>
            </div>

            <div className='flex flex-col justify-center items-center  mt-5 mb-5'>
                <p className='text-indigo-700 text-lg font-semibold mb-3'>Investment vs Revenue</p>
                <BarChart
                    width={330}
                    height={250}
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
            </div>
        </div>

    );
};

export default Dashboard;