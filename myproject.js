function displayCity(event){
    event.preventDefault();
    let cityElement=document.querySelector("#city-input");
    let h1=document.querySelector("#current-city");
    h1.innerHTML=cityElement.value;
    

}
let form=document.querySelector("#myForm");
form.addEventListener("submit",displayCity)

    