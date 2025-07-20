import { useState, useEffect } from "react";
import { getTotalAccidents } from "../api/index"


function TotalAccidentsCard() {

  const [count, setCount] = useState(null)

  useEffect(() => {
    getTotalAccidents().then((res => setCount(res.data.total_accidents)))
  }, [])

  return (
    <div className="border border-gray-400 rounded-md h-40 w-80 p-4 shadow-sm font-bold bg-blue-100 text-gray-500">Total Accidents <h1 className="font-bold py-6 text-2xl text-black">{count}</h1></div>
  )

}
export default TotalAccidentsCard
