import checkCondition from "./background logo change.js";
import { getLocation } from "./search-query.js";
import { retrieveFromStorage } from "./save.js";

const degreeSign = "°";

retrieveFromStorage();

const temperature = document.getElementById("temperature");
const locationName = document.getElementById("location");
const localTime = document.getElementById("time");
const dayDate = document.getElementById("day-date");

//Selecting other details options
const country = document.getElementById("country");
const region = document.getElementById("region");
const continent = document.getElementById("continent");
const feelsLike = document.getElementById("feels-like");

const weatherType = document.getElementById("weather-type");


const weatherAPI = "fe88d13146604bba9c871846230109";

async function currentWeatherData (){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${getLocation}`,{mode:"cors"});
    const currentWeather = await response.json();

    //Extracting values from the JSON received after pinging the API server
    const weatherInCelcius = currentWeather.current.temp_c;
    const location = currentWeather.location.name;
    const time = currentWeather.location.localtime;
    const dateTime = time.split(" ");

    const currentCondition = currentWeather.current.condition.text;
    const feelsLikeWeather = currentWeather.current.feelslike_c;
    const weatherRegion = currentWeather.location.region;
    const locationContinent = currentWeather.location.tz_id;
    const currentContinent = locationContinent.split("/")
    const currentCountry = currentWeather.location.country;
    
    //Assigning values extracted to the DOM
    temperature.textContent= `${weatherInCelcius}${degreeSign}`;
    locationName.textContent = location;
    localTime.textContent = dateTime[1];
    dayDate.textContent = dateTime[0];
    weatherType.textContent = currentCondition;
    region.textContent=weatherRegion;
    feelsLike.textContent = `${feelsLikeWeather}${degreeSign}`;
    continent.textContent = currentContinent[0];
    country.textContent = currentCountry;

    //Matches the weather condition with the right icon and background
    checkCondition(currentCondition)
}

currentWeatherData()


export {
    currentWeatherData
}