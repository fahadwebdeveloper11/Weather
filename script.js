const cityHere = document.querySelector('.your-city')
const searchBtn = document.querySelector('.search-btn')
const image = document.querySelector('.weather')


const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = 'a2a0733997358f032e1902c7b6be6e54'

async function showWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data = await response.json()

    if (response.status === 404) {
        alert('Please enter a valid city name')
    }
    else {
        const anotherDiv = document.querySelector('.another-div')
        anotherDiv.style.display = 'flex'

        let celcius = data.main.temp - 273.15

        const temp = document.querySelector('.image h1')
        temp.innerHTML = Math.round(celcius).toFixed(2) + "°C"

        const cityshow = document.querySelector('.image h3')
        cityshow.innerHTML = city

        const humidityHere = document.querySelector('.humidity-txt h4')
        humidityHere.innerHTML = `${data.main.humidity}%`

        const windHere = document.querySelector('.wind-txt h4')
        windHere.innerHTML = `${data.wind.speed}km/h`;
        console.log(data.weather[0].main);

        if (data.weather[0].main == "Clouds") {
            image.src = './images/clouds.png';
            console.log(image.src);
            console.log("Hello ");
        }
        else if (data.weather[0].main == "Clear") {
            image.src = "./images/clear.png";
            console.log("Hello ");
        }
        else if (data.weather[0].main == "Rain") {
            image.src = "./images/rain.png";
            console.log("Hello ");
        }
        else if (data.weather[0].main == "Drizzle") {
            image.src = "./images/drizzle.png";
            console.log("Hello ");
        }
        else if (data.weather[0].main == "Mist") {
            image.src = "./images/mist.png";
            console.log("Hello ");
        }
    }

}
searchBtn.addEventListener('click', function () {
    if (cityHere.value === "") {
        alert("Please enter city name")
    }
    else {
        showWeather(cityHere.value)
    }
    cityHere.value = ''
})