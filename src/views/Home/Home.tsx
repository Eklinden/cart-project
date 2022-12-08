import anime from 'animejs';
import { useEffect, useState } from 'react';

type animationType = {
  animation: string
}

const Home = ({animation}: animationType) => {
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
    <div className='wrapper'>Home</div>
  )
}

export default Home