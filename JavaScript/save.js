import { getLocation } from "./search-query.js";

function saveToLocalStorage (){
    localStorage.setItem("location",getLocation);
}

function retrieveFromStorage (){
    localStorage.getItem("location");
}

export{
    saveToLocalStorage,
    retrieveFromStorage
}