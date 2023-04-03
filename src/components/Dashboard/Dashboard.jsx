import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        {
            id:1,
            name: "student 1",
            physics: 50,
            chemistry: 85,
            math: 90
        },
        {
            id:2,
            name: "student 2",
            physics: 40,
            chemistry: 85,
            math: 90
        },
        {
            id:3,
            name: "student 3",
            physics: 70,
            chemistry: 85,
            math: 90
        },
        {
            id:4,
            name: "student 4",
            physics: 90,
            math: 90
        },
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line  dataKey='physics'></Line>
                <Line stroke='#8884d8' dataKey='math'></Line>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;