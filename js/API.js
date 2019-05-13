// This function gathers the rest of the hourly weaather data for the remaining cities
function hourlyAll(){
  for(var i = 0; i < cityNames.length; i++){
    if(cityNames[i] != 'Milwaukee'){
      hourlyAPICall(cities[cityNames[i]]);
    }
  }
}

// This function gathers the rest of the hourly weaather data for the remaining cities
function tomorrowAll(){
  for(var i = 0; i < cityNames.length; i++){
    if(cityNames[i] != 'Milwaukee'){
      tomorrowAPICall(cities[cityNames[i]]);
    }
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
