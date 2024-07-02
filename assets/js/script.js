const apiKey = 'da07fa0a4c08c9bfa4aaa05e229ae9b8';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const searchHistory = document.getElementById('searchHistory');
const currentWeather = document.getElementById('currentWeather');
const forecast = document.getElementById('forecast');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
        addToSearchHistory(city);
    }
});

function getWeather(city) {
    const geocodingUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

    axios.get(geocodingUrl)
        .then(response => {
            const { lat, lon } = response.data[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

            return axios.get(weatherUrl);
        })
        .then(response => {
            displayCurrentWeather(response.data.list[0], city);
            displayForecast(response.data.list);
        })
        .catch(error => {
            console.error('Error:', error);
            currentWeather.innerHTML = '<p class="has-text-danger">City not found. Please try again.</p>';
        });
}

function displayCurrentWeather(data, city) {
    const date = new Date(data.dt * 1000).toLocaleDateString();
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    currentWeather.innerHTML = `
        <h2 class="title is-4">${city} (${date})</h2>
        <div class="columns">
            <div class="column">
                <img src="${icon}" alt="${data.weather[0].description}">
                <p class="is-size-4">${temp}°C</p>
            </div>
            <div class="column">
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            </div>
        </div>
    `;
}

function displayForecast(data) {
    forecast.innerHTML = '';
    const dailyData = data.filter((item, index) => index % 8 === 0);

    dailyData.forEach(day => {
        const date = new Date(day.dt * 1000).toLocaleDateString();
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const temp = Math.round(day.main.temp);
        const humidity = day.main.humidity;
        const windSpeed = day.wind.speed;

        const forecastCard = document.createElement('div');
        forecastCard.className = 'column is-one-fifth';
        forecastCard.innerHTML = `
            <div class="card weather-card">
                <div class="card-content">
                    <p class="title is-5">${date}</p>
                    <img src="${icon}" alt="${day.weather[0].description}">
                    <p>Temp: ${temp}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind: ${windSpeed} m/s</p>
                </div>
            </div>
        `;

        forecast.appendChild(forecastCard);
    });
}

function addToSearchHistory(city) {
    let searchHistoryArray = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!searchHistoryArray.includes(city)) {
        searchHistoryArray.push(city);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));
    }
    displaySearchHistory();
}

function displaySearchHistory() {
    const searchHistoryArray = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.innerHTML = '';

    searchHistoryArray.forEach(city => {
        const button = document.createElement('button');
        button.className = 'button is-light is-fullwidth mb-2';
        button.textContent = city;
        button.addEventListener('click', () => getWeather(city));
        searchHistory.appendChild(button);
    });
}

displaySearchHistory();