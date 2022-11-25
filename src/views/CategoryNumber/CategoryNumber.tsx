import { useEffect, useState } from "react";
import YearChart from '../../components/YearChart/YearChart';
import priceData from '../../data/json_award.json';

const KategoriNumber = () => {
  const [year, setYear] = useState<number>(2019)
  const [yearData, setYearData] = useState({
    labels: getCategoryByYear().map((data) => data.category.en),
    datasets: [{
      label: 'Awards',
      data: getCategoryByYear().map((data) => data.laureates?.length)
    }]
  })
  useEffect(() => {
    updatePlot()
  }, [year])
  
  function getCategoryByYear() {
    const filteredByYear = priceData.filter((data) => {
      return parseInt(data.awardYear) === year
    })
    if(filteredByYear)
     return filteredByYear
    console.log("shit is not working")
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
      labels: getCategoryByYear().map((data) => data.category.en),
      datasets: [{
        label: 'Awards',
        data: getCategoryByYear().map((data) => data.laureates?.length)
      }]
    })
  }
  return (
    <main>
      <h1>The top ten most nobelprice winners</h1>
      <input onInput={(e)=> handleChange(e.target)} type="number" defaultValue={2019} min="1901" max="2019"/>
      <div className='chart-wrapper smaller'>
        <YearChart data={yearData} />
      </div>
    </main>
  )
}

export default KategoriNumber