import { useState, useEffect } from "react";
import { getMonthlyTrend } from "../api/index"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';


function LineChartComponent() {

  const [data, setData] = useState([])

  useEffect(() => {
    getMonthlyTrend().then((res => setData(res.data)))
  }, [])


  return (
    <div className="w-200 h-96 px-4 py-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
        Monthly Trends
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div >


  )
}

export default LineChartComponent
