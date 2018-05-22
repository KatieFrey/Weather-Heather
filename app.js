//Init Storage
const storage = new Storage();

//Get Stored Location Data
const weatherLocation = storage.getLocationData();

//Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();

//Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);

  //Set Location in Local Storage
  storage.setLocationData(city, state);


  //Get and display weather
  getWeather();

  //Close modal with JQuery
  $('#locModal').modal('hide');

});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}