const body = document.body;
const weatherImg = ["../Images/Rainy.jpg","../Images/Sunny Day.jpg","../Images/autumn.jpg", "../Images/partly cloudy.jpg","../Images/misty.jpg"];

const weatherLogo = document.getElementById("weather-logo");
const conditionIcons = {
    "clear": "flower-outline",
    "rainy": "rainy-outline",
    "sunny": "sunny-outline",
    "partlycloudy": "partly-sunny-outline",
    "mist": "cloud-outline"
}

//This function checks the weather condition and applies icon based on that
export default function checkCondition(weather){
    if (weather === "Clear"){
        weatherLogo.setAttribute("name", conditionIcons.clear);
        body.style.backgroundImage = `url("${weatherImg[2]}")`;
    } 
    else if (weather === "Rainy") {
        weatherLogo.setAttribute ("name",conditionIcons.rainy);
        body.style.backgroundImage = `url("${weatherImg[0]}")`;
    }
    else if (weather === "Sunny") {
        weatherLogo.setAttribute ("name",conditionIcons.sunny);
        body.style.backgroundImage = `url("${weatherImg[1]}")`;
    }
    else if (weather === "Partly cloudy") {
        weatherLogo.setAttribute ("name",conditionIcons.partlycloudy);
        body.style.backgroundImage = `url("${weatherImg[3]}")`;
    }
    else if(weather==="Mist"){
        weatherLogo.setAttribute("name",conditionIcons.mist);
        body.style.backgroundImage = `url("${weatherImg[4]}")`;
    }
}