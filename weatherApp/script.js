const api = {
  key: "366e04823bced7fc884c7b377a5ad834",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");
const city = document.querySelector(".location .city");
const typeWather = document.querySelector(".weather");
const temp = document.querySelector(".temp");
searchBox.addEventListener("keypress", setQuery);

function setQuery(ev) {
  if (ev.keyCode == 13) {
    getResult(searchBox.value);
  }
}

function getResult(query) {
  fetch(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => weather.json())
    .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C<span/>`;
  typeWather.innerText = `${weather.weather[0].description}`;
}
