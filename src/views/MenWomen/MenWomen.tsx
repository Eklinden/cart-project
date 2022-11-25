import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { menWomenData } from '../../data/dataExport';
import './MenWomen.scss';

const MenWomen = () => {
  return (
    <main>
      <h1>The Total Awards given between Men and Women</h1>
      <div className='chart-wrapper circle'>
        <Pie data={menWomenData} />
      </div>
    </main>
  )
}

export default MenWomen