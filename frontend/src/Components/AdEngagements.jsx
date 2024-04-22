import React from 'react'
import { XAxis, YAxis, BarChart, Rectangle, Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdEngagementsBarGraph = ({ }) => {

    const data = [
        { ad: 'Sports boots', adClicks: 402, ctr: 32, revenue: 402},
        { ad: 'Book keep', adClicks: 281, ctr: 32, revenue: 2102 },
        { ad: 'Sport City', adClicks: 102, ctr: 32, revenue: 1012 },
        { ad: 'Grammar corrector', adClicks: 231, ctr: 32, revenue: 2542 },
        { ad: 'AI bot', adClicks: 234, ctr: 32, revenue: 5432 },
        { ad: 'Research bot', adClicks: 230, ctr: 32, revenue: 7453 },
    ]

    return (
        <div style={{ width: '100%', height: '270px',display: 'flex', backgroundColor: '111129', padding:'20px'}}>
            <h5 style={{ color: 'white' }}>Ad performance</h5>
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 50, right: 20, bottom: 5 }}>
                    <XAxis dataKey={'ad'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={'adClicks'} fill='#8884d8' activeBar={<Rectangle fill='violet' stroke='blue'/>}/>
                    <Bar dataKey={'ctr'} fill='purple' activeBar={<Rectangle fill='violet' stroke='blue'/>}/>
                    <Bar dataKey={'revenue'} fill='magenta' activeBar={<Rectangle fill='violet' stroke='blue'/>}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AdEngagementsBarGraph;