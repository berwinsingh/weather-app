import { currentWeatherData } from "./main.js";
import { saveToLocalStorage } from "./save.js";

const searchButton = document.getElementById("search-btn");
const locationSearchInput = document.getElementById("location-search");
const errorNote = document.querySelector(".error");

let getLocation = "japan";

searchButton.addEventListener("click",updateSearchQuery);

function updateSearchQuery (){
    if(locationSearchInput.value!=""){
        getLocation = locationSearchInput.value;
        locationSearchInput.value = "";

        currentWeatherData().then(() => {
            errorNote.classList.add("display");
            saveToLocalStorage();
        }).catch((error) => {
            errorNote.classList.remove("display");
        });
    }
}

export{
    getLocation
}