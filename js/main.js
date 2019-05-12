$(document).ready(function() {
  const TABLE_ROWS = 8;
  const MILWAUKEE_CODE = "5263045";
  const CHICAGO_CODE = "4887398";
  const MINNEAPOLIS_CODE = "5037649";
  const DALLAS_CODE = "4684888";
  const APPID = "5dfa9c5274bb50d7ada514fc482db59d";
  const CLOUD_NO_COVERAGE = 10;
  const CLOUD_LOW_COVERAGE = 30;
  const CLOUD_HI_COVERAGE = 70;
  const UNIX_FIX = 1000;
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
  cities['Milwaukee'] = milwaukee;
  cities['Chicago'] = chicago;
  cities['Minneapolis'] = minneapolis;
  cities['Dallas'] = dallas;
  var raining = false;

  // Main code block which calls the functions that hit the API and begin to construct the page
  try{
    // These three calls load the initial page data
    onLoadCurrent(updatePage);
    onLoadHourly(updateHourly);
    onLoadTomorrow(loadData);

    // These two calls load the rest of the hourly and tomorrow's weather data
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

  function changeCity(cityName){
    city = cities[cityName];
    $("#content__nav-cities li").removeClass("selected");
    $("#content__nav-cities li."+city.current.name).addClass("selected");
    updatePage(city);
    updateHourly(city);
    updateTomorrow(city);
  }

  function displayError(displayClass){
      $(displayClass).prepend("<div class=\"error_message slds-align_absolute-center\">We have encountered an error. Please try again later!</div>");
  }

  // This function hits the current weather API for all 4 cities. The data is stored and then the page is built with the milwaukee information
  function onLoadCurrent(callback) {
    var url = 'http://api.openweathermap.org/data/2.5/group?id='+ MILWAUKEE_CODE + ',' + CHICAGO_CODE + ',' + MINNEAPOLIS_CODE +',' + DALLAS_CODE + '&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        milwaukee.current = data.list[0];
        chicago.current = data.list[1];
        minneapolis.current = data.list[2];
        dallas.current = data.list[3];
        callback(milwaukee);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        displayError(".content__weather-container");
      }
    });
  }

  // Gets the current hourly weather forecast for milwaukee and then calls the function to display it
  function onLoadHourly(callback) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+ MILWAUKEE_CODE + '&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        milwaukee.hourly = data;
        callback(milwaukee);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        displayError(".column1");
      }
    });
  }

  // Gets the future weather forecast for milwaukee and then calls the function to display it
  function onLoadTomorrow(callback) {
    var url = 'http://api.openweathermap.org/data/2.5/forecast?id='+ MILWAUKEE_CODE + '&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        callback(milwaukee, data, updateTomorrow);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        displayError(".column3");
      }
    });
  }

  // This is a helper function for loading a large chunk of data as to avoid synchronicity issues
  function loadData(city, data, callback){
    city.tomorrow = data;
    callback(city);
  }

  // This function gathers the rest of the hourly weaather data for the remaining cities
  function hourlyAll(updateHourly){
    hourlyAPICall(chicago);
    hourlyAPICall(minneapolis);
    hourlyAPICall(dallas);
  }

  function hourlyAPICall(city){
      var url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+city.code+'&units=imperial&APPID=' + APPID;
      $.ajax({
        dataType: "jsonp",
        url: url,
        jsonCallback: 'jsonp',
        success: function (data) {
          city.hourly = data;
        },
        error: function(XMLHttpRequest, textStatus, errorThrown){
          displayError(".content__weather-container");
        }
      });
  }

  // This function gathers the rest of the hourly weaather data for the remaining cities
  function tomorrowAll(updateTomorrow){
    tomorrowAPICall(chicago);
    tomorrowAPICall(minneapolis);
    tomorrowAPICall(dallas);
  }

  function tomorrowAPICall(city){
    var url = 'http://api.openweathermap.org/data/2.5/forecast?id='+city.code+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        city.tomorrow = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        displayError(".content__weather-container");
      }
    });
  }

  // build the clock
  function clock(){
    var curTime = new Date();
    $("#time").text(curTime.toLocaleTimeString("en-US", {timeZone: "America/Chicago", hour:"2-digit", minute:"2-digit"}));
  }

  function updateHourly(city){
    var currentHour = new Date().getHours();
    var hr, am_pm;
    for(var i = 0; i < TABLE_ROWS; i++){
      hr = new Date(city.hourly.list[i].dt*1000).getHours();
      am_pm = (hr < 12 || hr > 23 ? "AM" : "PM");
      hr = hr % 12;
      hr = (hr == 0 ? 12 : hr);
      $("#content__weather-hourly-detail-"+i+"-1").text(hr + " " + am_pm);
      $("#content__weather-hourly-detail-"+i+"-2").text(Math.round(city.hourly.list[i].main.temp)+"°F");
      $("#content__weather-hourly-detail-"+i+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city.hourly.list[i].weather[0].icon + ".png");
    }
  }

  // This function updates the data in the tomorrow column
  function updateTomorrow(city){
    var testDate;
    var date;
    var hr;
    var am_pm;
    var rowCount=0;
    // find the index of the next 6 AM entry
    for(var index = 3; index < city.tomorrow.list.length; index++){
      testDate = new Date(city.tomorrow.list[index].dt_txt);
      if (testDate.getHours() == 6) break;
    }
    // construct the next day information
    for(var i = index; i < index + TABLE_ROWS; i++){
      hr = new Date(city.tomorrow.list[i].dt_txt).getHours();
      am_pm = (hr < 12 || hr == 24 ? "AM" : "PM");
      hr = hr % 12;
      hr = (hr == 0 ? 12 : hr);
      $("#content__weather-daily-detail-"+rowCount+"-1").text(hr + " " + am_pm);
      $("#content__weather-daily-detail-"+rowCount+"-2").text(Math.round(city.tomorrow.list[i].main.temp)+"°F");
      $("#content__weather-daily-detail-"+rowCount+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city.tomorrow.list[i].weather[0].icon + ".png");
      rowCount++;
    }
  }

  // This function updates the center column and weather effects
  function updatePage(city){
    $(".spinner").addClass("hide");
    $(".toggles").addClass("hide");
    $("#temperature").text(Math.round(city.current.main.temp) + "°F");
    checkClouds(city);
    checkNight(city);
    checkPrecipitation(city);
  }

  function checkClouds(city){
    // Determine cloud cover and related effects
    if(city.current.clouds.all >= CLOUD_NO_COVERAGE){
      $("#content__weather-small-clouds").removeClass("hide");
    }
    if(city.current.clouds.all >= CLOUD_LOW_COVERAGE){
      $("#content__weather-big-clouds").removeClass("hide");
    }
    // Determine if we are displaying sun and blue skies or cloud and grey skies
    if(city.current.clouds.all < CLOUD_HI_COVERAGE){
      $("#background-cloud").removeClass("cloud-animate");
      $(".content__weather-container-sun").removeClass("hide");
      $(".content__weather-container").removeClass("cloudy");
      $("html").removeClass("cloudy");
      $("html").addClass("sunny");
      $(".content__weather-container").addClass("sunny");
    }else{
      $("#background-cloud").addClass("cloud-animate");
      $(".content__weather-container-cloud").removeClass("hide");
      $(".content__weather-container").removeClass("sunny");
      $(".content__weather-container").addClass("cloudy");
      $("html").removeClass("sunny");
      $("html").addClass("cloudy");
    }
  }

  function checkNight(city){
    // Determine whether it is nighttime or daytime
    var curTime = new Date().getTime();
    if(curTime >= city.current.sys.sunset*UNIX_FIX || curTime <= city.current.sys.sunrise*UNIX_FIX){
      $(".content__weather-container-sun").addClass("hide");
      $(".content__weather-container").removeClass("sunny");
      $(".content__weather-container").removeClass("cloudy");
      $(".content__weather-container").addClass("night");
      $("html").removeClass("sunny");
      $("html").removeClass("cloudy");
      $("html").addClass("night");
      $("#time").addClass("night");
      // Displaying a cloud or a moon
      if(city.current.clouds.all < CLOUD_HI_COVERAGE){
        $(".content__weather-container-cloud").addClass("hide");
        $(".content__weather-container-moon").removeClass("hide");
      }
    }else{
      $("html").removeClass("night");
      $(".content__weather-container").removeClass("night");
      $("#time").removeClass("night");
    }
  }

  function checkPrecipitation(city){
    // Determine if it is raining, and the intensity of the rain
    // clouds are hidden to reduce screen noise
    if(city.current.weather[0].main == RAIN){
      $("#background-cloud").removeClass("cloud-animate");
      $("#content__weather-small-clouds").addClass("hide");
      $("#content__weather-big-clouds").addClass("hide");
      drops = 1250;
      if(!raining){
        createRain();
        raining = true;
      }else{
        destroyRain();
        createRain();
      }
      $(".rain").removeClass("hide");
    }
    else if(city.current.weather[0].main == DRIZZLE){
      $("#background-cloud").removeClass("cloud-animate");
      $("#content__weather-small-clouds").addClass("hide");
      $("#content__weather-big-clouds").addClass("hide");
      drops = 200;
      if(!raining){
        createRain();
        raining = true;
      }else{
        destroyRain();
        createRain();
      }
      $(".rain").removeClass("hide");
    }
    else if(city.current.weather[0].main == SNOW){
      $("#background-cloud").removeClass("cloud-animate");
      $(".content__weather-container-sun").addClass("hide");
      $(".content__weather-container-cloud").addClass("hide");
      $(".content__weather-container-snow").removeClass("hide");
    }
  }
});
