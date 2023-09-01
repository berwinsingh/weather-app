const degreeSign = "°";
const weatherImg = ["./Images/Rainy.png","./Images/Sunny Day.png"];
const temperature = document.getElementById("temperature");
const localTime = document.getElementById("time");
const dayDate = document.getElementById("day-date");


const weatherAPI = "fe88d13146604bba9c871846230109";
const defaultLocation = "New Delhi"

async function currentWeatherData (){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherAPI}&q=${defaultLocation}`,{mode:"cors"});
    const currentWeatherData = await response.json();
    // console.log(currentWeatherData);
}

currentWeatherData()