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
  if(curTime >= city.current.sys.sunset*UNIX_MULTIPLIER || curTime <= city.current.sys.sunrise*UNIX_MULTIPLIER){
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
