// This function updates the center column and weather effects
function updatePage(city){
  $(".spinner").addClass("hide");
  $(".toggles").addClass("hide");
  var curTime = new Date(city.current.dt*UNIX_MULTIPLIER);
  $("#time").text(curTime.toLocaleTimeString("en-US", {timeZone: city.timeZone, hour:"2-digit", minute:"2-digit"}));
  $("#temperature").text(Math.round(city.current.main.temp) + "°F");
  // checkWeather.js
  checkClouds(city);
  checkNight(city);
  checkPrecipitation(city);
}

function updateHourly(city){
  var currentHour = new Date().getHours();
  var hourInfo;
  var hourlyTime;
  for(var i = 0; i < TABLE_ROWS; i++){
    hourlyTime = new Date(city.hourly.list[i].dt*UNIX_MULTIPLIER);
    hourInfo = hourlyTime.toLocaleTimeString("en-US", {timeZone: city.timeZone, hour:"2-digit", hour12:"true"});
    $("#content__weather-hourly-detail-"+i+"-1").text(hourInfo);
    $("#content__weather-hourly-detail-"+i+"-2").text(Math.round(city.hourly.list[i].main.temp)+"°F");
    $("#content__weather-hourly-detail-"+i+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city.hourly.list[i].weather[0].icon + ".png");
  }
}

// This function updates the data in the tomorrow column
function updateTomorrow(city){
  var testDate;
  var date;
  var hourInfo;
  var am_pm;
  var rowCount=0;
  var timeInfo;
  // find the index of the next morning entry
  for(var index = 0; index < city.tomorrow.list.length; index++){
    testDate = new Date(city.tomorrow.list[index].dt*UNIX_MULTIPLIER);
    testHour = testDate.toLocaleTimeString("en-US", {timeZone: city.timeZone, hour:"2-digit", hour12:"false"});
    timeInfo = testHour.split(" ");
    // row data is for 3AM or later
    if (timeInfo[1] == AM && parseInt(timeInfo[0]) >= MIN_TOMORROW_START_TIME) break;
  }
  // construct the next day information
  for(var i = index; i < index + TABLE_ROWS; i++){
    hourlyTime = new Date(city.tomorrow.list[i].dt*UNIX_MULTIPLIER);
    hourInfo = hourlyTime.toLocaleTimeString("en-US", {timeZone: city.timeZone, hour:"2-digit", hour12:"true"});
    $("#content__weather-daily-detail-"+rowCount+"-1").text(hourInfo);
    $("#content__weather-daily-detail-"+rowCount+"-2").text(Math.round(city.tomorrow.list[i].main.temp)+"°F");
    $("#content__weather-daily-detail-"+rowCount+"-3 img").attr("src", "http://openweathermap.org/img/w/" + city.tomorrow.list[i].weather[0].icon + ".png");
    rowCount++;
  }
}
