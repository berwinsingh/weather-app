const weatherImg = ["./Images/Rainy.png","./Images/Sunny Day.png","../Images/Autumn.png"];

const weatherLogo = document.getElementById("weather-logo");
const conditionIcons = {
    "clear": "cloud-outline",
    "rainy": "rainy-outline",
    "sunny": "sunny-outline",
    "partlycloudy": "partly-sunny-outline",
}

//This function checks the weather condition and applies icon based on that
export default function checkCondition(weather){
    if (weather === "Clear") weatherLogo.setAttribute("name", conditionIcons.clear);
    if (weather === "Rainy") weatherLogo.setAttribute ("name",conditionIcons.rainy);
    if (weather === "Sunny") weatherLogo.setAttribute ("name",conditionIcons.sunny);
    if (weather === "Partly cloudy") weatherLogo.setAttribute ("name",conditionIcons.partlycloudy);
}