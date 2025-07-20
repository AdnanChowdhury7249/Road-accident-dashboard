import TotalAccidentCard from "../components/totalAccidentCard"
import MostCommonWeatherCard from '../components/mostCommonWeatherCard'
import TotalNumberOfFatalAccidents from '../components/numOfFatalAccidents'

const Header = () => {
  return (
    <div className="w-full px-8 py-10 flex justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl mb-6 text-center">
          Vehicle Accident Analytics Dashboard
        </h1>
        <h3 className="text-gray-500 py-6">Real-time insights into road safety and accident patterns
        </h3>

        <div className="flex flex-col lg:flex-row gap-10 ">
          <TotalAccidentCard />
          <MostCommonWeatherCard />
          <TotalNumberOfFatalAccidents />
        </div>
      </div>
    </div>
  )
}

export default Header
