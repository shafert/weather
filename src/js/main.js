const TABLE_ROWS = 8;
const APPID = "5dfa9c5274bb50d7ada514fc482db59d";
const CLOUD_NO_COVERAGE = 10;
const CLOUD_LOW_COVERAGE = 30;
const CLOUD_HI_COVERAGE = 70;
const UNIX_MULTIPLIER = 1000;
const MINUTE = 60000;
const RAIN = "Rain";
const DRIZZLE = "Drizzle";
const SNOW = "Snow";
const AM = "AM";
const MIN_TOMORROW_START_TIME = 3;
var raining = false;
var cityData = [
  ["Milwaukee", "5263045", "America/Chicago"],
  ["Chicago", "4887398", "America/Chicago"],
  ["Minneapolis", "5037649", "America/Chicago"],
  ["Dallas", "4684888", "America/Chicago"]
];
var cityNames = [];
var cities = [];
var firstCity;

constructArrays(cityData, cities, cityNames);

firstCity = cities[cityNames[0]];

$(document).ready(function() {
  try{
    // These three calls load the initial page data
    // functions found in onLoad.js
    onLoadCurrent(cities, cityNames, firstCity, updatePage);
    onLoadHourly(firstCity, updateHourly);
    onLoadTomorrow(firstCity, loadData);

    // These two calls load the rest of the hourly and tomorrow's weather data
    // functions found in API.js
    remainingHourlyForecasts();
    remainingTomorrowForecasts();

    // Set up & update the clock
    clock();
    setInterval(clock, MINUTE);
  }
  catch(err){
    displayError(".content__weather-container");
    console.log(err);
  }

  // These update the page information when a new city is selected
  try{
    $(document).on('click', '.nav-button', function() {
      if (!$(this).parent().hasClass("selected")){
        changeCity($(this).attr("value"));
      }
    });
  }
  catch(err){
    displayError(".content__weather-container");
    console.log(err);
  }
});

// update the page information when a new city has been selected
function changeCity(cityName){
  city = cities[cityName];
  $("#content__nav-cities li").removeClass("selected");
  $("#content__nav-cities li."+city.current.name).addClass("selected");
  // functions found in update.js
  updatePage(city);
  updateHourly(city);
  updateTomorrow(city);
}

function constructArrays(cityData, cities, cityNames){
  for(var i = 0; i < cityData.length; i ++){
    currentCityName = cityNames[i] = cityData[i][0];
    cities[cityNames[i]] = [];
    cities[cityNames[i]].code = cityData[i][1];
    cities[cityNames[i]].timeZone = cityData[i][2];
  }
}

// prepends the error message to the relevant section
function displayError(displayClass){
  $(displayClass).prepend("<div class=\"error_message slds-align_absolute-center\">We have encountered an error. Please try again later!</div>");
}

// build the clock
function clock(){
  var curTime = new Date();
  $("#time").text(curTime.toLocaleTimeString("en-US", {timeZone: firstCity.timeZone, hour:"2-digit", minute:"2-digit"}));
}
