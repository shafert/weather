const TABLE_ROWS = 8;
const MILWAUKEE_CODE = "5263045";
const CHICAGO_CODE = "4887398";
const MINNEAPOLIS_CODE = "5037649";
const DALLAS_CODE = "4684888";
const APPID = "5dfa9c5274bb50d7ada514fc482db59d";
const CLOUD_NO_COVERAGE = 10;
const CLOUD_LOW_COVERAGE = 30;
const CLOUD_HI_COVERAGE = 70;
const UNIX_MULTIPLIER = 1000;
const MINUTE = 60000;
const RAIN = "Rain";
const DRIZZLE = "Drizzle";
const SNOW = "Snow";
var milwaukee = [];
var chicago = [];
var minneapolis = [];
var dallas = [];
milwaukee.code = MILWAUKEE_CODE;
chicago.code = CHICAGO_CODE;
minneapolis.code = MINNEAPOLIS_CODE;
dallas.code = DALLAS_CODE;
var cities = [];
var cityNames = ['Milwaukee', 'Chicago', 'Minneapolis', 'Dallas'];
cities['Milwaukee'] = milwaukee;
cities['Chicago'] = chicago;
cities['Minneapolis'] = minneapolis;
cities['Dallas'] = dallas;
var raining = false;


$(document).ready(function() {
  // Main code block which calls the functions that hit the API and begin to construct the page
  try{
    // These three calls load the initial page data
    // functions found in onLoad.js
    onLoadCurrent(updatePage);
    onLoadHourly(updateHourly);
    onLoadTomorrow(loadData);

    // These two calls load the rest of the hourly and tomorrow's weather data
    // functions found in API.js
    hourlyAll();
    tomorrowAll();

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
    $( ".nav-button" ).click(function() {
      changeCity($(this).attr("value"));
    });
  }
  catch(err){
    displayError(".content__weather-container");
    console.log(err);
  }
});

// functions found in update.js
function changeCity(cityName){
  city = cities[cityName];
  $("#content__nav-cities li").removeClass("selected");
  $("#content__nav-cities li."+city.current.name).addClass("selected");
  updatePage(city);
  updateHourly(city);
  updateTomorrow(city);
}

// prepends the error message to the relevant section
function displayError(displayClass){
  $(displayClass).prepend("<div class=\"error_message slds-align_absolute-center\">We have encountered an error. Please try again later!</div>");
}

// build the clock
function clock(){
  var curTime = new Date();
  $("#time").text(curTime.toLocaleTimeString("en-US", {timeZone: "America/Chicago", hour:"2-digit", minute:"2-digit"}));
}
