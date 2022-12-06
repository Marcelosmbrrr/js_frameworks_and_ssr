import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export function HorizontalLines() {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 50,
                    right: 50,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" fontSize={10} />
                <YAxis fontSize={10} />
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
            </LineChart>
        </ResponsiveContainer>
    );
}