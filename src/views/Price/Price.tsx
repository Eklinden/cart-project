import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { adjustedPriceAvarageData, normalPriceAvarageData } from '../../data/dataExport';
import './Price.scss';

type animationType = {
  animation: string
}
const Price = ({animation}: animationType) => {
  const [dataToShow, setDataToShow] = useState(normalPriceAvarageData)
  const [toggleInfl, setToggleInfl] = useState<boolean>(false)

  useEffect(() => {
    if(animation === "fade-in") {
      anime({
        targets: '.wrapper',
        duration: 1000,
        opacity: [0, 1],
        easing: "easeInOutQuad"
    })
    } else if(animation === "slide-in") {
      anime({
        targets: '.wrapper',
        duration: 1000,
        translateX: ["100%", 0],
        easing: "easeInOutQuad"
      })
    } else if(animation === "rolldown") {
      anime({
        targets: '.wrapper',
        duration: 1000,
        translateY: ["100deg", 0],
        easing: "easeInOutQuad"
      })
    }

  }, [])
  

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
    <main className='wrapper'>
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