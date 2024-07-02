# Cloud Cast

## Description

Weather Dashboard is a web application that allows users to search for weather information of different cities. It provides current weather conditions and a 5-day forecast, featuring a clean and responsive design using Bulma CSS framework.

## Features

- Search for weather by city name
- Display current weather conditions including temperature, humidity, and wind speed
- Show a 5-day forecast
- Maintain a search history for quick access to previously searched cities
- Responsive design that works on various screen sizes

## Screenshots

![Cloud Cast screenshot](./assets/WebApp%20ScreenShot.png)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bulma CSS Framework
- OpenWeather API
- Axios for API requests

## Installation

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

## Usage

1. Enter a city name in the search bar.
2. Click the search button or press Enter.
3. View the current weather and 5-day forecast for the searched city.
4. Click on cities in the search history to quickly view their weather again.

## API Key

This application uses the OpenWeather API. You will need to sign up for a free API key at [OpenWeather](https://openweathermap.org/api) and replace the `apiKey` variable in the `script.js` file with your own key.

## CSS Customization

The application includes custom CSS for hover effects on the weather cards:

```css
.weather-card {
    transition: all 0.3s ease;
}

.weather-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}
```
This creates a subtle lift and shadow effect when hovering over the forecast cards.
## Deployed Application
[Cloud Cast](https://zainabid333.github.io/CloudCast/)
## Future Enhancements

- Add more detailed weather information
- Implement geolocation for automatic local weather
- Include weather maps and radar
- Add toggles for different units (metric/imperial)

## License
MIT
## Contact

[portfolio Zain Ul Abid]( https://zainabid333.github.io/zain-ul-abid-portfolio/)