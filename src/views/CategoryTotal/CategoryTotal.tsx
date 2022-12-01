import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { categoryData } from '../../data/dataExport';

type animationType = {
  animation: string
}

const KategoriTotal = ({animation}: animationType) => {
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
      <h1>Total Awards given per Category</h1>
      <div className='chart-wrapper circle'>
        <Pie data={categoryData} />
      </div>
    </main>
  )
}

export default KategoriTotal