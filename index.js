const SEARCH_FORM = document.querySelector(".search-form-container");
const CITY_INPUT = document.querySelector(".city-input");
const BUTTON = document.querySelector(".button");

const WEATHER_CONTAINER = document.querySelector(".weather-container");
const REAL_TEMP = document.querySelector(".real-temp");
const CITY_NAME = document.querySelector(".city-name");
const WEATHER_IMAGE = document.querySelector(".weather-image");
const FEELS_TEMP = document.querySelector(".feels-temp");

const ERROR_TYPE = document.querySelector(".error-type");
const ERROR_DESCRIPTION = document.querySelector(".error-description");

const LOADING = document.querySelector(".loading");
const ERROR = document.querySelector(".error");

const APP_ID = "627a364491c4f2751422838eafa1aa99";

SEARCH_FORM.addEventListener("submit", async (event) => {
  event.preventDefault();

  // const city = event.target.city.value.trim();
  const city = CITY_INPUT.value.trim();

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;
  // const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}&units=metric`;

  WEATHER_CONTAINER.style.display = "none";
  LOADING.style.display = "flex";
  ERROR.style.display = "none";

  const response = await fetch(URL);
  const result = await response.json();

  BUTTON.disabled = true;

  setTimeout(() => {
    if (response.ok) {
      const tempInCel = kelvinToCel(result.main.temp);
      const feelTempInCel = kelvinToCel(result.main.feels_like);
      REAL_TEMP.textContent = `${tempInCel}°C`;
      FEELS_TEMP.textContent = `${feelTempInCel}°C`;

      // REAL_TEMP.textContent = `${Math.round(result.main.temp)}°C`;
      // FEELS_TEMP.textContent = `${Math.round(result.main.feels_like)}°C`;

      CITY_NAME.textContent = result.name;
      const icon = result.weather[0].icon;
      WEATHER_IMAGE.src = `http://openweathermap.org/img/w/${icon}.png`;
      WEATHER_IMAGE.alt = result.weather[0].description;
      CITY_INPUT.value = "";
      WEATHER_CONTAINER.style.display = "flex";
      LOADING.style.display = "none";
      BUTTON.disabled = false;
    } else {
      ERROR_TYPE.textContent = `API Error: ${result.cod}`;
      ERROR_DESCRIPTION.textContent = `${result.message}`;
      CITY_INPUT.value = "";
      LOADING.style.display = "none";
      ERROR.style.display = "flex";
      BUTTON.disabled = false;
    }
  }, 4000);
});

const kelvinToCel = (kelvin) => {
  return (kelvin - 273.15).toFixed(0);
};
