const apiKey ="b681e5bd098286db728c655da2780a2c";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather(){
    const response= await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();