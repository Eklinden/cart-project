import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { topTenData } from '../../data/dataExport';

type animationType = {
  animation: string
}

const TopTen = ({animation}: animationType) => {

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
      <h1>The top ten most nobelprice winners</h1>
      <div className='chart-wrapper smaller'>
        <Bar data={topTenData} />
      </div>
    </main>
  )
}

export default TopTen