import './index.css'
import Header from './page/Header'
import BarChartComponent from './components/barChart.jsx'
import LineChartComponent from './components/lineChart.jsx'
import PieChartComponent from './components/pieChart.jsx'

function App() {
  return (
    <>
      <Header />
      {/* Flex row for Bar + Line chart */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-6">
        <BarChartComponent />
        <LineChartComponent />
      </div>

      {/* Pie chart below */}
      <div className="px-4 py-6">
        <PieChartComponent />
      </div>
    </>
  )
}

export default App
