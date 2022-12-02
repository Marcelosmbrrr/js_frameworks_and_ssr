import * as React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function HorizontalWaves(props) {

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: props.value * 100,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={'100%'}
                height={'100%'}
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Area type="monotone" dataKey="uv" stackId="1" stroke={props.colors[0]} fill={props.colors[0]} />
                <Area type="monotone" dataKey="pv" stackId="1" stroke={props.colors[1]} fill={props.colors[1]} />
                <Area type="monotone" dataKey="amt" stackId="1" stroke={props.colors[2]} fill={props.colors[2]} />
            </AreaChart>
        </ResponsiveContainer>
    );

}