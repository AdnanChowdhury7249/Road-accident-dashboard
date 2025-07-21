import { useState, useEffect } from "react";
import { getRoadConditions } from "../api/index";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA66CC'];

function PieChartComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoadConditions().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="w-full px-4 py-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
        Road Surface Conditions by Total
      </h2>
      <div className="max-h-[600px] overflow-auto">
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="80%"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}

export default PieChartComponent;
