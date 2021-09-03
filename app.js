const loadWeather = () => {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=2b9b656a0b58520c52097e3fc2d4ad7f&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data =>displayWeather(data))
       
}
const displayWeather = (data)=>{
     console.log(data);
const city=document.getElementById('city');
city.innerText=`${data.name}`
const url=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
const imgIcon=document.getElementById('weather-icon');
imgIcon.setAttribute('src',url)
const temperature=document.getElementById('temperature');
// temperature.innerText=`${Math.floor(data.main.temp-273.15)}`;
temperature.innerText=`${data.main.temp}`;
const temperatureStatus=document.getElementById('status');
temperatureStatus.innerText=`${data.weather[0].main}`

}