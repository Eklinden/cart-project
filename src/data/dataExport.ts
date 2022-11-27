import { countryType, extractedPriceType, topTenType } from '../types/types';
import priceData from './json_award.json';
import personData from './json_laureates.json';

/* --------------------------------- Men / Women Data ----------------------------------------- */
const menWomenData = {
  labels: ['Men', 'Women'],
  datasets: [{
    label: 'Awards',
    data: [personData.filter((data) => data.gender !== "female").length, personData.filter((data) => data.gender !== "male").length]
  }]
}

/* --------------------------------- Top Ten Data ----------------------------------------- */

const topTenData = {
  labels: topTen().map(data => data.name),
  datasets: [{
    label: 'Awards',
    data: topTen().map(data => data.awards)
  }]
}
function topTen() {
  let topTen: topTenType[] = personData.map((data) => {
    return {
      name: data.id,
      awards: data.nobelPrizes.length
    }
  })
  let sortedArray: topTenType[] = topTen.sort((obj1, obj2) => {
    if (obj1.awards > obj2.awards) {
        return 1;
    }

    if (obj1.awards < obj2.awards) {
        return -1;
    }

    return 0;
  });
  let grabbedTopTen = sortedArray.slice(0,9);
  grabbedTopTen.reverse();
  return grabbedTopTen
}

/* --------------------------------- Price Money Data ----------------------------------------- */

const adjustedPriceAvarageData = {
  labels: priceAvarage().map(e => e.year),
  datasets: [{
    label: 'Money with inflation (SEK)',
    data: priceAvarage().map(e => e.adjustedPrice)
  }]
}
const normalPriceAvarageData = {
  labels: priceAvarage().map(e => e.year),
  datasets: [{
    label: 'Money (SEK)',
    data: priceAvarage().map(e => e.price)
  }]
}

function priceAvarage() {
  let allPrices: extractedPriceType[] = priceData.map((data) => {return {year: data.awardYear, price:data.prizeAmount, adjustedPrice: data.prizeAmountAdjusted}})
  const uniqueArray = allPrices.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === allPrices.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  return uniqueArray
}

/* --------------------------------- Country Data ----------------------------------------- */

const CountryData = {
  labels: sumCountryWinners().map(e => e.country),
  datasets: [{
    label: 'Awards',
    data: sumCountryWinners().map(e => e.times)
  }]
}
function sumCountryWinners() {
  let countryWins: countryType[] = personData.map((data) => {
    if(!data.birth) {
      return {country: "corrupt data", times: 0}
    }
    return {country: data.birth.place.country.en, times: 0}
  })
  let timesWon: countryType[] = countryWins.map((data) => {
    return countInArrayCountry(countryWins, data)
  })
  const uniqueArray: countryType[] = timesWon.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === timesWon.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  const overOne: countryType[] = uniqueArray.filter((data) => data.times > 1)
  let sortedArray: countryType[] = overOne.sort((obj1: countryType, obj2: countryType) => {
    if (obj1.times > obj2.times) {
        return 1;
    }

    if (obj1.times < obj2.times) {
        return -1;
    }

    return 0;
  });
  return sortedArray
}
function oneTimersCountry() {
  let countryWins: countryType[] = personData.map((data) => {
    if(!data.birth) {
      return {country: "corrupt data", times: 0}
    }
    return {country: data.birth.place.country.en, times: 0}
  })  
  let timesWon: countryType[] = countryWins.map((data) => {
    return countInArrayCountry(countryWins, data)
  })
  const uniqueArray: countryType[] = timesWon.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === timesWon.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  const oneTimers: countryType[] = uniqueArray.filter((data) => data.times === 1)
  return oneTimers
}
function countInArrayCountry(array: countryType[], what: any) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i].country === what.country) {
          count++;
      }
  }
  return {times: count, country: what.country};
}

/* --------------------------------- Total Awards per Category ----------------------------------------- */

const categoryData = {
  labels: calculateCategories().map(e => e.category),
  datasets: [{
    label: 'Total Awards',
    data: calculateCategories().map(e => e.times)
  }]
}
function calculateCategories(){
  let allPricesArray = personData.map((data)=> {
    return {category: data.nobelPrizes}
  })
  let filteredArray = allPricesArray.map((data) => {
    return countInArrayCategory(allPricesArray, data.category[0])
  })
  const uniqueArray = filteredArray.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === filteredArray.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  console.log(uniqueArray)
  return uniqueArray
}
calculateCategories()
function countInArrayCategory(array, what) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i].category[0].category.en === what.category.en) {
          count++;
      }
  }
  return {times: count, category: what.category.en};
}
export { menWomenData, topTenData, normalPriceAvarageData, adjustedPriceAvarageData, CountryData, categoryData };
export default oneTimersCountry
