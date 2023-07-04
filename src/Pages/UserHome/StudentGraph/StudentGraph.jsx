import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StudentGraph = () => {

    const data = [
        {
            name: 'January',
            present: 4000,
            absent: 2400,
            amt: 2400,
        },
        {
            name: 'February',
            present: 3000,
            absent: 1398,
            amt: 2210,
        },
        {
            name: 'March',
            present: 2000,
            absent: 9800,
            amt: 2290,
        },
        {
            name: 'April',
            present: 2780,
            absent: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            present: 1890,
            absent: 4800,
            amt: 2181,
        },
        {
            name: 'June',
            present: 2390,
            absent: 3800,
            amt: 2500,
        },
        {
            name: 'July',
            present: 3490,
            absent: 4300,
            amt: 2100,
        },
    ];


    return (
        <ResponsiveContainer width="90%" height="50%" className='my-10'>
            <BarChart
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
                <Bar dataKey="present" fill="#1FAA59" />
                <Bar dataKey="absent" fill="#E21717" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StudentGraph;