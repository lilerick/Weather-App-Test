let weather = {
    "apiKey": "e23c44794b3d6680d7e94871b397c4c2",
    fethWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
},
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "\xB0C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "Km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')"
        document.body.style.backgroundSize = "cover";

    },
    search: function() {
        this.fethWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".srch-button")
    .addEventListener("click", function ()
    {
        weather.search();

    });

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        weather.search();
    } 
});

weather.fethWeather("Santo Domingo");
        
