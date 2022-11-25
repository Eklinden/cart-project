import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { topTenData } from '../../data/dataExport';

const TopTen = () => {
  return (
    <main>
      <h1>The top ten most nobelprice winners</h1>
      <div className='chart-wrapper smaller'>
        <Bar data={topTenData} />
      </div>
    </main>
  )
}

export default TopTen