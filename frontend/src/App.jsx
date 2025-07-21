import './index.css'
import TotalAccidentCard from "./components/totalAccidentCard"
import MostCommonWeatherCard from './components/mostCommonWeatherCard'
import TotalNumberOfFatalAccidents from './components/numOfFatalAccidents'
import Header from './page/Header'
import BarChartComponent from './components/barChart.jsx'

function App() {


  return (
    <>
      <Header />
      <BarChartComponent />
    </>
  )
}

export default App
