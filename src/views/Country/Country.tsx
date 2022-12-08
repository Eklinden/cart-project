import anime from 'animejs';
import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import oneTimersCountry, { CountryData } from '../../data/dataExport';
import './Country.scss';


type animationType = {
  animation: string
}

const Country = ({animation}: animationType) => {
  let letters = ["M","o","s","t","space","W","i","n","s","space","p","e","r","space","c","o","u","n","t","r","y"]
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
        <div className='chart-wrapper'>
          <Bar data={CountryData} />
          <h2>Countries with ONE nobelprice winner</h2>
          <div className="country-list">
            {oneTimersCountry().map((country, index:number) => {
              return(
                <li key={index}>{country.country}</li>
              )
            })}
          </div>
      </div>
      </div>
    </main>
  )
}

export default Country