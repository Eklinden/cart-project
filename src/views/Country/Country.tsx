import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import oneTimersCountry, { CountryData } from '../../data/dataExport';
import './Country.scss';

const Country = () => {
  return (
    <main>
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