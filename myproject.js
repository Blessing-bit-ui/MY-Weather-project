let currentDate = new Date();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"]
    let day=days[currentDate.getDay()]
    let hour=currentDate.getHours();
    let minutes=currentDate.getMinutes();
    let currentTime=document.querySelector("#current-time");
     currentTime.innerHTML=`${day} ${hour}:${minutes}`; 
     let form=document.querySelector("#myForm")
    form.addEventListener("submit", displayDate);

    function displayTemp(response){
        console.log(response)
        let temperatureElement=document.querySelector("#current-Temp");
        temperatureElement.innerHTML= Math.round(response.data.temperature.current);
    }

function displayDate(event){
        event.preventDefault();
        let cityInput=document.querySelector("#city-input");
        let h1=document.querySelector("#current-city");
        let city=cityInput.value;
        h1.innerHTML=city;
        
       

        let apiKey="c64617d52ffbbt4391487a0eaf99cbbo";
        let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    
axios.get(apiUrl).then(displayTemp)
}