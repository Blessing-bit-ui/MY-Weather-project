function displayData (response){
let temperatureElement=document.querySelector("#current-Temp");
let temperature= response.data.temperature.current;
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#percentage");
let windElement=document.querySelector("#Kilos")



temperatureElement.innerHTML= Math.round(temperature);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML=`${response.data.wind.speed}Km/h`;


}


function searchCity(city){
let apiKey = "c64617d52ffbbt4391487a0eaf99cbbo";
let apiUrl =
  `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  
  axios.get(apiUrl).then(displayData)

}
function displayCity(event){
    event.preventDefault();
    let cityElement=document.querySelector("#city-input");
    let h1=document.querySelector("#current-city");
    h1.innerHTML=cityElement.value;
    searchCity(cityElement.value)
}
let form=document.querySelector("#myForm");
form.addEventListener("submit",displayCity)

    