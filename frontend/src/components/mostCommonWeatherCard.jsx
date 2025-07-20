import { useState, useEffect } from "react";
import { getMostCommonWeatherConditions } from "../api/index";


function MostCommonWeatherCard() {
  const [MostCommonWeather, setMostCommonWeather] = useState(null)

  useEffect(() => {
    getMostCommonWeatherConditions().then((res => setMostCommonWeather(res.data.MostCommonWeather)))

  }, [])


  return (
    <div className="border border-gray-400 rounded-md h-40 w-80 p-4 shadow-sm font-bold bg-yellow-100 text-gray-500">Most Common Weather <h1 className="font-bold py-6 text-2xl text-black">{MostCommonWeather}</h1></div>

  )
}

export default MostCommonWeatherCard


