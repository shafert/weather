// This function updates the center column and weather effects
function updatePage(city){
  $(".spinner").addClass("hide");
  $(".toggles").addClass("hide");
  $("#temperature").text(Math.round(city.current.main.temp) + "°F");
  // checkWeather.js
  checkClouds(city);
  checkNight(city);
  checkPrecipitation(city);
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
