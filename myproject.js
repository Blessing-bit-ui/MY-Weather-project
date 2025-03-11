function displayData (response){
console.log(response.data)
let temperatureElement=document.querySelector("#current-Temp");
let temperature= response.data.temperature.current;
let cityElement=document.querySelector("#current-city");
let descriptionElement=document.querySelector("#description");
let humidityElement=document.querySelector("#percentage");
let windElement=document.querySelector("#Kilos");
let timeElement=document.querySelector("#current-time");
let date=new Date(response.data.time * 1000);
let iconElement=document.querySelector("#icon");

cityElement.innerHTML=response.data.city;
temperatureElement.innerHTML= Math.round(temperature);
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windElement.innerHTML=`${response.data.wind.speed}Km/h`;
timeElement.innerHTML=displayDate(date);
iconElement.innerHTML=`<img src="${response.data.condition.icon_url}" class="icon"/>`;

getForcast(response.data.city);

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
    let cityinputElement=document.querySelector("#city-input");
    searchCity(cityinputElement.value)
}

function getForcast(city){
let apiKey = "c64617d52ffbbt4391487a0eaf99cbbo";
let apiUrl =
  `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayForecast)
}

function displayDay(timestamp){
let date=new Date(timestamp*1000);
 let days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
return days[date.getDay()];
}

function displayForecast(response) {
   console.log(response.data)
  let forecastsElement = document.querySelector("#forecasting");

 
  let forecastWeather = "";
  response.data.daily.forEach(function (day,index){
  if(index<5){ 
    forecastWeather += `<div class="forecast">
  <div class="weather-forcast">
    <div class="weather-day">${displayDay(day.time)}</div>
    <div class="weather-icon"><img src="${day.condition.icon_url}"/></div>
    <div class="weather-degree">
      <div class="weather-degrees">${Math.round(day.temperature.maximum)}°</div>
      <div class="weather-degreess">${Math.round( day.temperature.minimum)}°</div>
    </div>
  </div>
</div>`;
  }
});
  forecastsElement.innerHTML = forecastWeather;
};

let form=document.querySelector("#myForm");
form.addEventListener("submit",displayCity);

searchCity("Paris")