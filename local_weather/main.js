var tempUm = 'C';
var celsius;

$(document).ready(function() {
  $('#update-weather').on('click', function (e) {
    e.preventDefault();
    showLocalWeather();
  });

  $('#temp_um').on('click', function (e) {
    e.preventDefault();
    toggleTempUm();
  });

  showLocalWeather();
});

function showLocalWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocalWeatherByPosition);
  } else {
    // "Geolocation is not supported by this browser."
  }

}

function showLocalWeatherByPosition(position) {
  $.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=' +position.coords.latitude + '&lon=' + position.coords.longitude, function(data) {
    console.log(data);

    celsius = data.main.temp;

    var locationText = data.name + ', ' + data.sys.country;
    var weatherDescription = data.weather[0].description;
    var weatherStatusIcon = data.weather[0].icon;

    $('#location-text').text(locationText);
    showTemperature();
    $('#weather-text').text(weatherDescription);
    $('#weather-status-icon').attr('src', weatherStatusIcon);

  });
}

function toggleTempUm() {
  if ( tempUm === 'C') {
    tempUm = 'F';
  } else {
    tempUm = 'C';
  }
  showTemperature();
}

function showTemperature() {
  var temp;
  if ( tempUm === 'C') {
    temp = celsius;
  } else {
    temp = celsius * 1.8 + 32
  }
  $('#temperature').text(temp);
  $('#temp_um').text(tempUm);
}
