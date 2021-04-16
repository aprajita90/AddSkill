$(document).ready(function(){
  var lat;
  var long;
  
  $.getJSON("http://ip-api.com/json", function(data){
    lat = data.lat;
    long = data.lon;
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=00daf4a32fd091fea070cc84511f4f17'
    $.getJSON(api, function(data1){
      var fahrTemp;
      var celsTemp;
      var ktemp;               
      var tempSwap = true;
      var weatherType = data1.weather[0].description;
      kTemp = data1.main.temp;
      var windSpeed = data1.wind.speed;
      var city = data1.name;
      var country = data1.sys.country;
      fahrTemp = (kTemp*(9/5)-459.67).toFixed(1);
      celsTemp = (kTemp-273).toFixed(1);
      $("#city").html(city +", "+ country);
      $("#weatherType").html(weatherType);
      $("#fahrTemp").html(fahrTemp +" &#8457;");
      $("#fahrTemp").click(function(){
        if(tempSwap === false){
          $("#fahrTemp").html(fahrTemp + " &#8457;")
          tempSwap = true;
        }else{
          $("#fahrTemp").html(celsTemp + " &#8451;")
          tempSwap = false;
        }
      });
      windSpeed = (2.237*(windSpeed)).toFixed(1);
      $("#windSpeed").html(windSpeed + " mph");
      if(fahrTemp>80){
       // $('body').css('background-image', 'url(https://cdn.civitatis.com/guias/dublin/fotos/phoenix-park.jpg)');
      }else if(fahrTemp>70){
        //$('body').css('background-image', 'url(http://www.buckfieldwestport.com/images/lettermagheerawalk.jpg)');
      }else if(fahrTemp>60){
        //$('body').css('background-image', 'url(http://static.freepik.com/photos-libre/doolough--co--mayo--irlande_21186276.jpg)')
      }else if(fahrTemp>50){
       // $('body').css('background-image', 'url(http://photo.accuweather.com/photogallery/2009/12/1024/3dc21a82a.jpg)');
      }   
    });
    
  });  
  
});

