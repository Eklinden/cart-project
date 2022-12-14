import anime from 'animejs';
import { useEffect, useState } from "react";
import YearChart from '../../components/YearChart/YearChart';
import priceData from '../../data/json_award.json';
import { nobelPriceCateType } from '../../types/types';

type animationType = {
  animation: string
}

const KategoriNumber = ({animation}: animationType) => {
  const [year, setYear] = useState<number>(2019)
  const [yearData, setYearData] = useState({
    labels: getCategoryByYear().map((data: nobelPriceCateType) => data.category),
    datasets: [{
      label: 'Awards',
      data: getCategoryByYear().map((data: nobelPriceCateType) => data.times)
    }]
  })
  let letters = ["A","w","a","r","d","s","space","g","i","v","e","n","space","p","e","r","space","y","e","a","r"]
  useEffect(() => {
    updatePlot()
  }, [year])
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
  
  function getCategoryByYear() {
    const filteredByYear: nobelPriceCateType[] = []

    priceData.map((data) => {
      let category = data.category.en
      let times = 0
      if(!data.laureates)
        return
      data.laureates.map(()=> times++)
      if(parseInt(data.awardYear) === year) {
        filteredByYear.push({category: category, times: times})
      }
    })
    if(!filteredByYear)
      return [{category: "corrupt data", times: 0},]
    
    return filteredByYear
  }
  
  function handleChange(e: any){
    e.value = e.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0')
    if (e.value > 2019) {
      e.value = 2019
      setYear(parseInt("2019"))
    }
    if (e.value < 1901) {
      setYear(1901)
    }
    if (e.value < 2019 && e.value > 1901) {
      setYear(parseInt(e.value))
    }
  }

  const updatePlot = () => {
    setYearData({
      labels: getCategoryByYear().map((data) => data.category),
      datasets: [{
        label: 'Awards',
        data: getCategoryByYear().map((data) => data.times)
      }]
    })
  }
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
        <input onInput={(e)=> handleChange(e.target)} type="number" defaultValue={2019} min="1901" max="2019"/>
        <div className='chart-wrapper smaller'>
          <YearChart data={yearData} />
        </div>
      </div>
    </main>
  )
}

export default KategoriNumber