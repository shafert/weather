$(document).ready(function() {
  const TABLE_ROWS = 8;
  const MILWAUKEE_CODE = 5263045;
  const CHICAGO_CODE = 4887398;
  const MINNEAPOLIS_CODE = 5037649;
  const DALLAS_CODE = 4684888;
  const APPID = "5dfa9c5274bb50d7ada514fc482db59d";
  var milwaukee = [];
  var chicago = [];
  var minneapolis = [];
  var dallas = [];
  var raining = false;
  var drops = 500;

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
    setInterval(clock, 60000);
  }
  catch(err){
    $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">We have encountered an error. Please try again later!</div>");
    console.log(err);
  }

  // This function hits the current weather API for all 4 cities. The data is stored and then the page is built with the milwaukee information
  function onLoadCurrent(callback) {
    var url = 'http://api.openweathermap.org/data/2.5/group?id='+ MILWAUKEE_CODE + ',' + CHICAGO_CODE + ',' + MINNEAPOLIS_CODE +',' + DALLAS_CODE + '&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        milwaukee[0] = data.list[0];
        chicago[0] = data.list[1];
        minneapolis[0] = data.list[2];
        dallas[0] = data.list[3];
        callback(milwaukee);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
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
        milwaukee[1] = data;
        callback(milwaukee);
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".column1").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
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
        $(".column3").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });
  }

  // This is a helper function for loading a large chunk of data as to avoid synchronicity issues
  function loadData(city, data, callback){
    city[2] =  data;
    callback(city);
  }

  // This function gathers the rest of the hourly weaather data for the remaining cities
  function hourlyAll(updateHourly){
    var url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+CHICAGO_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        chicago[1] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });

    url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+MINNEAPOLIS_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        minneapolis[1] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });

    url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+DALLAS_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        dallas[1] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });
  }

  // This function gathers the rest of the hourly weaather data for the remaining cities
  function tomorrowAll(updateTomorrow){
    var url = 'http://api.openweathermap.org/data/2.5/forecast?id='+CHICAGO_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        chicago[2] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });

    url = 'http://api.openweathermap.org/data/2.5/forecast?id='+MINNEAPOLIS_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        minneapolis[2] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
      }
    });

    url = 'http://api.openweathermap.org/data/2.5/forecast?id='+DALLAS_CODE+'&units=imperial&APPID=' + APPID;
    $.ajax({
      dataType: "jsonp",
      url: url,
      jsonCallback: 'jsonp',
      success: function (data) {
        dallas[2] = data;
      },
      error: function(XMLHttpRequest, textStatus, errorThrown){
        $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">Error fetching data. Please try again later!</div>");
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
    for(var i = 0; i < TABLE_ROWS; i++){

      // Workaround for calculating time of day;
      hr = currentHour + 1 + i;
      am_pm = (hr < 12 || hr > 23 ? "AM" : "PM");
      hr = hr % 12;
      hr = (hr == 0 ? 12 : hr);
      /*
      NOTE: This is the preferred way, but doesn't work outside of Chrome

      var dateString = new Date(city[1].list[i].dt_txt + " UTC").toLocaleTimeString();
      //var num = d1.toLocaleTimeString("en-US", {timeZone: "America/Chicago"}).split(":")[0];
      var am_pm = dateString.split(" ")[1];
      */
      $("#content__weather-hourly-detail-"+i+"-1").text(hr + " " + am_pm);
      $("#content__weather-hourly-detail-"+i+"-2").text(Math.round(city[1].list[i].main.temp)+"°F");
      $("#content__weather-hourly-detail-"+i+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city[1].list[i].weather[0].icon + ".png");
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
    for(var index = 0; index < city[2].list.length; index++){
      testDate = new Date(city[2].list[index].dt_txt);
      if (testDate.getHours() == 6) break;
    }
    // construct the next day information
    for(var i = index; i < index + TABLE_ROWS; i++){
      date = new Date(city[2].list[i].dt_txt);
      hr = date.getHours();
      am_pm = (hr < 12 || hr == 24 ? "AM" : "PM");
      hr = hr % 12;
      hr = (hr == 0 ? 12 : hr);
      $("#content__weather-daily-detail-"+rowCount+"-1").text(hr + " " + am_pm);
      $("#content__weather-daily-detail-"+rowCount+"-2").text(Math.round(city[2].list[i].main.temp)+"°F");
      $("#content__weather-daily-detail-"+rowCount+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city[2].list[i].weather[0].icon + ".png");
      rowCount++;
    }
  }

  // This function updates the center column and weather effects
  function updatePage(city){
    $(".spinner").addClass("hide");
    $(".toggles").addClass("hide");
    $("#temperature").text(Math.round(city[0].main.temp) + "°F");

    // Determine cloud cover and related effects
    if(city[0].clouds.all < 10){
      $("#content__weather-small-clouds").addClass("hide");
      $("#content__weather-big-clouds").addClass("hide");
    }
    else if(city[0].clouds.all >= 10  && city[0].clouds.all < 30){
      $("#content__weather-small-clouds").removeClass("hide");
      $("#content__weather-big-clouds").addClass("hide");
    }
    else if(city[0].clouds.all >= 30){
      $("#content__weather-small-clouds").removeClass("hide");
      $("#content__weather-big-clouds").removeClass("hide");
    }

    // Determine if we are displaying sun and blue skies or cloud and grey skies
    if(city[0].clouds.all < 70){
      $("#background-cloud").removeClass("cloud-animate");
      $(".content__weather-container-cloud").addClass("hide");
      $(".content__weather-container-sun").removeClass("hide");
      $(".content__weather-container").removeClass("cloudy");
      $("html").removeClass("cloudy");
      $("html").addClass("sunny");
      $(".content__weather-container").addClass("sunny");
    }else{
      $("#background-cloud").addClass("cloud-animate");
      $(".content__weather-container-sun").addClass("hide");
      $(".content__weather-container-cloud").removeClass("hide");
      $(".content__weather-container").removeClass("sunny");
      $(".content__weather-container").addClass("cloudy");
      $("html").removeClass("sunny");
      $("html").addClass("cloudy");
    }

    // Determine whether it is nighttime or daytime
    var curDate = new Date();
    if(curDate.getTime() >= city[0].sys.sunset*1000 || curDate.getTime() <= city[0].sys.sunrise*1000){
      $(".content__weather-container-sun").addClass("hide");
      $(".content__weather-container").removeClass("sunny");
      $(".content__weather-container").removeClass("cloudy");
      $(".content__weather-container").addClass("night");
      $("html").removeClass("sunny");
      $("html").removeClass("cloudy");
      $("html").addClass("night");
      $("#time").addClass("night");
      // Displaying a cloud or a moon
      if(city[0].clouds.all < 70){
        $(".content__weather-container-cloud").addClass("hide");
        $(".content__weather-container-moon").removeClass("hide");
      }
    }else{
      $("html").removeClass("night");
      $(".content__weather-container").removeClass("night");
      $("#time").removeClass("night");
    }

    // Determine if it is raining, and the intensity of the rain
    // clouds are hidden to reduce screen noise
    if(city[0].weather[0].main == "Rain"){
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
    else if(city[0].weather[0].main == "Drizzle"){
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
    else if(city[0].weather[0].main == "Snow"){
      $("#background-cloud").removeClass("cloud-animate");
      $(".content__weather-container-sun").addClass("hide");
      $(".content__weather-container-cloud").addClass("hide");
      $(".content__weather-container-snow").removeClass("hide");
    }
  }

  // These update the page information when a new city is selected
  try{
    $( "#milwaukee-button" ).click(function() {
      $("#content__nav-cities li").removeClass("selected");
      $("#content__nav-cities li.milwaukee").addClass("selected");
      updatePage(milwaukee);
      updateHourly(milwaukee);
      updateTomorrow(milwaukee);
    });
    $( "#chicago-button" ).click(function() {
      $("#content__nav-cities li").removeClass("selected");
      $("#content__nav-cities li.chicago").addClass("selected");
      updatePage(chicago);
      updateHourly(chicago);
      updateTomorrow(chicago);
    });
    $( "#minneapolis-button" ).click(function() {
      $("#content__nav-cities li").removeClass("selected");
      $("#content__nav-cities li.minneapolis").addClass("selected");
      updatePage(minneapolis);
      updateHourly(minneapolis);
      updateTomorrow(minneapolis);
    });
    $( "#dallas-button" ).click(function() {
      $("#content__nav-cities li").removeClass("selected");
      $("#content__nav-cities li.dallas").addClass("selected");
      updatePage(dallas);
      updateHourly(dallas);
      updateTomorrow(dallas);
    });
  }
  catch(err){
    $(".content__weather-container").prepend("<div class=\"error_message slds-align_absolute-center\">We have encountered an error. Please try again later!</div>");
    console.log(err);
  }

  // returns a random x and y value for the rain
  function randRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
  }

  function createRain() {
    for (i = 1; i < drops; i++) {
      var dropLeft = randRange(0, 2600);
      var dropTop = randRange(-1000, 1400);

      $('.rain').append('<div class="drop" id="drop' + i + '"></div>');
      $("#drop"+i).css('left', dropLeft);
      $("#drop" + i).css("top", dropTop);
    }
  }

  function destroyRain(){
    $(".drop").remove();
  }
});
