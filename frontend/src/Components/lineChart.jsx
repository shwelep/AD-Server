import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineGraph = ({}) => {
    const data = [
        { name: 'Mon', uv: 4000, impressions: 2400, amt: 2400 },
        { name: 'Tue', uv: 3000, impressions: 1398, amt: 2210 },
        { name: 'Wed', uv: 2000, impressions: 9800, amt: 2290 },
        { name: 'Thu', uv: 2780, impressions: 3908, amt: 2000 },
        { name: 'Fri', uv: 1890, impressions: 4800, amt: 2181 },
        { name: 'Sat', uv: 2390, impressions: 3800, amt: 2500 },
        { name: 'Sun', uv: 3490, impressions: 4300, amt: 2100 },
    ]

    return (
        <div style={{ width: '100%', height: '270px', backgroundColor: '111129', padding:'20' }}>
            <h5 style={{ color: 'white' }}>Revenue</h5>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 50, right: 20, bottom: 5 }}>
                    <XAxis dataKey={'name'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type='monotone' dataKey={'impressions'} stroke='#8884d8' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LineGraph;