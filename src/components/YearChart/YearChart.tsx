import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

type chartType = {
  data: any
}
const YearChart = ({ data}: chartType) => {
  return (
    <Bar data={data} />
  )
}

export default YearChart