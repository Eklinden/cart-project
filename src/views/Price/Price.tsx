import 'chart.js/auto';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { adjustedPriceAvarageData, normalPriceAvarageData } from '../../data/dataExport';
import './Price.scss';

const Price = () => {
  const [dataToShow, setDataToShow] = useState(normalPriceAvarageData)
  const [toggleInfl, setToggleInfl] = useState<boolean>(false)

  function toggleInflation() {
    if(!toggleInfl) {
      setDataToShow(adjustedPriceAvarageData)
      setToggleInfl(!toggleInfl)
    } else {
      setDataToShow(normalPriceAvarageData)
      setToggleInfl(!toggleInfl)
    }
  }
  return (
    <main>
      <h1>AwardMoney per Year</h1>
      <div className='toggle'>
        <p>Toggle with inflation:</p>
        <input onClick={toggleInflation} type="checkbox" id="inflation" />
      </div>
      <div className='chart-wrapper'>
        <Line data={dataToShow} />
      </div>
    </main>
  )
}

export default Price