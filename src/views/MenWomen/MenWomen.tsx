import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { menWomenData } from '../../data/dataExport';
import './MenWomen.scss';


type animationType = {
  animation: string
}

const MenWomen = ({animation}: animationType) => {
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
  return (
    <main className='wrapper'>
      <h1>The Total Awards given between Men and Women</h1>
      <div className='chart-wrapper circle'>
        <Pie data={menWomenData} />
      </div>
    </main>
  )
}

export default MenWomen