import { useState, useEffect } from "react";
import { getAccidentsByDay } from "../api/index";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell
} from 'recharts';

function BarChartComponent() {
  const COLORS = [
    "#3b82f6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#8b5cf6",
    "#ec4899",
    "#14b8a6"
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    getAccidentsByDay().then((res) => {
      const rawData = res.data;
      const formattedData = Object.entries(rawData).map(([key, value]) => ({
        key,
        value
      }));
      setData(formattedData);
    });
  }, []);

  return (
    <div className="w-200 h-96 px-4 py-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="key" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
