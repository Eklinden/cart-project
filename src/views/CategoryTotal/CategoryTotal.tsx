import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { categoryData } from '../../data/dataExport';

type animationType = {
  animation: string
}

const KategoriTotal = ({animation}: animationType) => {
  let letters = ["T","o","t","a","l","space","A","w","a","r","d","s","space","g","i","v","e","n","space","p","e","r","space","C","a","t","e","g","o","r","y"]
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
        targets: '.wrapper .chart',
        duration: 1400,
        translateY: ["20%", 0],
        opacity: [0, 1],
        delay: 1400,
        easing: "easeInOutQuad"
      })
      anime({
        targets: '.title h1',
        duration: 700,
        translateY: ["100%", 0],
        opacity: [0, 1],
        delay: anime.stagger(50),
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
      <div className='title'>
        {letters.map((e: string)=> {
          if(e === "space")
            return <div className='space'></div>
          return <h1>{e}</h1>
        })}
      </div>
      <div className="chart">
        <div className='chart-wrapper circle'>
          <Pie data={categoryData} />
        </div>
      </div>
    </main>
  )
}

export default KategoriTotal