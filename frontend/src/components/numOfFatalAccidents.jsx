import { useState, useEffect } from "react";
import { getNumberOfFatalAccidents } from "../api/index";


function TotalNumberOfFatalAccidents() {
  const [totalFatalAccidents, setTotalFatalAccidents] = useState(null)

  useEffect(() => {
    getNumberOfFatalAccidents().then((res => (setTotalFatalAccidents(res.data.totalFatalAccidents))))

  })

  return (
    <div className="border border-gray-400 rounded-md h-40 w-80 p-4 shadow-sm font-bold bg-red-100 text-gray-500">Fatal Accidents <h1 className="font-bold py-6 text-2xl text-black">{totalFatalAccidents}</h1></div>
  )
}

export default TotalNumberOfFatalAccidents
