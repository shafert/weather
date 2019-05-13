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
