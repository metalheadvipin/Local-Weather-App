    $(document).ready(function(){

      if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){

                var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
                document.getElementById("result").innerHTML = positionInfo;         
                var coords = "";
                coords += 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude; 
                console.log(coords + 'firsr');          
                var url = 'https://fcc-weather-api.glitch.me/api/current?';
                 url += coords;

        $.getJSON(url, function(data){
            console.log(data);  
            console.log(data.main.temp);  
            console.log(data.main.humidity);
            console.log(data.weather.icon);

              var $result = $("#result");
              $result += "<p> The weather is " + data.main.temp + '&#176; </p>';
            });//getJSON
               });

          
        } else {
               alert("Sorry, your browser does not support HTML5 geolocation.");
               }


    }); 
          
