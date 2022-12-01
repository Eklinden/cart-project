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
      <h1>The most Wins per country</h1>
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
    </main>
  )
}

export default Country