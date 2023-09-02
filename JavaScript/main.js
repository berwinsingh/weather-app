import checkCondition from "./background logo change.js";

const degreeSign = "°";

const temperature = document.getElementById("temperature");
const locationName = document.getElementById("location");
const localTime = document.getElementById("time");
const dayDate = document.getElementById("day-date");

const weatherType = document.getElementById("weather-type");


const weatherAPI = "fe88d13146604bba9c871846230109";
const getLocation = "Sydney"

async function currentWeatherData (){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${getLocation}`,{mode:"cors"});
    const currentWeather = await response.json();
    // console.log(currentWeather);

    //Extracting values from the JSON received after pinging the API server
    const weatherInCelcius = currentWeather.current.feelslike_c;
    const location = currentWeather.location.name;
    const time = currentWeather.location.localtime;
    const dateTime = time.split(" ");
    const currentCondition = currentWeather.current.condition.text;
    
    //Assigning values extracted to the DOM
    temperature.textContent= `${weatherInCelcius}${degreeSign}`;
    locationName.textContent = location;
    localTime.textContent = dateTime[1];
    dayDate.textContent = dateTime[0];
    weatherType.textContent = currentCondition;

    checkCondition(currentCondition)
}

currentWeatherData()