import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
const Chart = () => {

  const data = [
    { name: "USA", users: 2000000000 },
    { name: "Australi", users: 1500000000 },
    { name: "Canada", users: 1000000000 },
    { name: "JApan ", users: 1000000000 },
    { name: "China", users: 1000000000 },
    { name: "ETC", users:3000000000 },
  ];

  
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 main'>
            
            <h1>Our car Users</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>

        </div>
    );
};

export default Chart;