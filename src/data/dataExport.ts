import { countryType, extractedPriceType, nobelPriceCateType, topTenType } from '../types/types';
import priceData from './json_award.json';
import personData from './json_laureates.json';

/* --------------------------------- Men / Women Data ----------------------------------------- */
const menWomenData = {
  labels: ['Men', 'Women', 'Organisations'],
  datasets: [{
    label: 'Awards',
    data: [
    countOrgs().filter((data) => data === "male").length, 
    countOrgs().filter((data) => data === "female").length,
    countOrgs().filter((data) => data !== "male" && data !== "female").length
  ]
  }]
}
function countOrgs () {
  let organisation: string[] = []
  personData.filter((data) => {
    if(data.hasOwnProperty('gender')) {
      if(!data.gender)
        return
      organisation.push(data.gender)
    } else if(data.hasOwnProperty('orgName')){
      if(!data.orgName)
        return
      organisation.push(data.orgName.en)
    }
  })
  return organisation
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
  sortedArray.reverse();
  let grabbedTopTen = sortedArray.slice(0,9);
  let addName: topTenType[] = []
  grabbedTopTen.map((data) => {
    personData.map((compare) => {
      if(compare.id === data.name){
        if(typeof compare.fullName === "undefined") {
          if(!compare.orgName)
            return
          addName.push({
            name: compare.orgName.en,
            awards: data.awards
          })
        } else {
          addName.push({
            name:compare.fullName.en,
            awards: data.awards
          })
        }
      }
    })
  })
  console.log(addName)
  addName.reverse();
  return addName
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
    if(data.birth) {
      return {country: data.birth.place.country.en, times: 0}
    } else if (data.founded !== undefined) {
      if (data.founded.place.country !== undefined) {

        return {country: data.founded.place.country.en, times: 0}
      } else {
        return {country: "unknown", times: 0}
      }
    }
    else {
      return {country: "unknown", times: 0}
    }
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
function countInArrayCountry(array: countryType[], what: countryType) {
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
  let allPricesArray: nobelPriceCateType[] = []
  priceData.map((data)=> {
    let newData = JSON.stringify(data)
    let refinedData = JSON.parse(newData)
    if(!refinedData.category)
      return
    allPricesArray.push(countInArrayCategory(priceData, refinedData.category.en))
  })
  console.log(allPricesArray)
  const uniqueArray: nobelPriceCateType[] = allPricesArray.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === allPricesArray.findIndex(obj => {
      return JSON.stringify(obj) === _value;
    });
  });
  return uniqueArray
}
function countInArrayCategory(array: any, category: string) {
  var count = 0;
  array.map((data: any)=> {
    if(data.category.en === category){
      count++
    }
  })
  return {times: count, category: category};
  }

export { menWomenData, topTenData, normalPriceAvarageData, adjustedPriceAvarageData, CountryData, categoryData };
export default oneTimersCountry
