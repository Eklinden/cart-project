import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { categoryData } from '../../data/dataExport';

const KategoriTotal = () => {
  return (
    <main>
      <h1>Total Awards given per Category</h1>
      <div className='chart-wrapper circle'>
        <Pie data={categoryData} />
      </div>
    </main>
  )
}

export default KategoriTotal