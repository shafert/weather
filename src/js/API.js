// This function gathers the rest of the hourly weaather data for the remaining cities
function remainingHourlyForecasts(){
  // start at 1 because the first city's data has been loaded
  for(var i = 1; i < cityNames.length; i++){
    hourlyAPICall(cities[cityNames[i]]);
  }
}

// This function gathers the rest of the hourly weaather data for the remaining cities
function remainingTomorrowForecasts(){
  // start at 1 because the first city's data has been loaded
  for(var i =  1; i < cityNames.length; i++){
    tomorrowAPICall(cities[cityNames[i]]);
  }
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
        displayError(".column1");
      }
    });
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
      displayError(".column3");
    }
  });
}
