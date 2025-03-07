function displayData (response){
console.log(response.data)
let temperatureElement=document.querySelector("#current-Temp");
let temperature= response.data.temperature.current;
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#percentage");
let windElement=document.querySelector("#Kilos");
let timeElement=document.querySelector("#current-time");
let date=new Date(response.data.time * 1000);
let iconElement=document.querySelector("#icon");

temperatureElement.innerHTML= Math.round(temperature);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML=`${response.data.wind.speed}Km/h`;
timeElement.innerHTML=displayDate(date);
iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="icon"/>`;


function displayDate(date){
let hours=date.getHours();
let minutes=date.getMinutes();
let days=["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
let day=days[date.getDay()];
if(minutes<10){
  minutes=`0${minutes}`
}
return `${day} ${hours}:${minutes}`;
};
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

    