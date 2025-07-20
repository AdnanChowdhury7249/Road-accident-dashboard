import './index.css'
import TotalAccidentCard from "./components/totalAccidentCard"
import MostCommonWeatherCard from './components/mostCommonWeatherCard'
import TotalNumberOfFatalAccidents from './components/numOfFatalAccidents'

function App() {


  return (
    <>
      <TotalAccidentCard />
      <MostCommonWeatherCard />
      <TotalNumberOfFatalAccidents />
    </>
  )
}

export default App
