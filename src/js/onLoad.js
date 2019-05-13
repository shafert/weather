// These functions load the data for Milwaukee, since that is the city that is displayed when the page is opened.

// This function hits the current weather API for all 4 cities. The data is stored and then the page is built with the milwaukee information
function onLoadCurrent(cities, cityNames, firstCity, callback) {
  var url = 'http://api.openweathermap.org/data/2.5/group?id=';
  for (var i = 0; i < cityNames.length; i++){
    url += cities[cityNames[i]].code;
    if(i != cityNames.length -1){
      url += ','
    }
  }
  url +=  '&units=imperial&APPID=' + APPID;

  $.ajax({
    dataType: "jsonp",
    url: url,
    jsonCallback: 'jsonp',
    success: function (data) {
      // load each data chunk into the array based on the city name in the received json package
      for (var i = 0; i < cityNames.length; i++){
        cities[data.list[i].name].current = data.list[i];
        // update the text and the value of the navigation tabs programmatically
        $(".nav-button:eq("+i+")").text(data.list[i].name);
        $(".nav-button:eq("+i+")").attr("value", data.list[i].name);
        $(".content__nav-cities-li:eq("+i+")").addClass(data.list[i].name);
      }
      callback(firstCity);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      displayError(".content__weather-container");
    }
  });
}

// Gets the current hourly weather forecast for milwaukee and then calls the function to display it
function onLoadHourly(firstCity, callback) {
  var url = 'http://api.openweathermap.org/data/2.5/forecast/hourly?id='+ firstCity.code + '&units=imperial&APPID=' + APPID;
  $.ajax({
    dataType: "jsonp",
    url: url,
    jsonCallback: 'jsonp',
    success: function (data) {
      firstCity.hourly = data;
      callback(firstCity);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
      displayError(".column1");
    }
  });
}

// Gets the future weather forecast for milwaukee and then calls the function to display it
function onLoadTomorrow(firstCity, callback) {
  var url = 'http://api.openweathermap.org/data/2.5/forecast?id='+ firstCity.code + '&units=imperial&APPID=' + APPID;
  $.ajax({
    dataType: "jsonp",
    url: url,
    jsonCallback: 'jsonp',
    success: function (data) {
      callback(firstCity, data, updateTomorrow);
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
