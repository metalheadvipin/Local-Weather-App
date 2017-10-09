    $(document).ready(function(){

      if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
       
                var coords = "";
                coords += 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude; 
                    
                var url = 'https://fcc-weather-api.glitch.me/api/current?';
                 url += coords;

        $.getJSON(url, function(data){
            console.log(data);  
            
            
            
            var resultString = '<p>Temperature: ' + data.main.temp + '&#8451;</p>';
            resultString +=  '<p>Humidity: ' + data.main.humidity + '&#x25;</p>';
            $('#result').append(resultString);
            
            });//getJSON
               });

          
        } else {
               alert("Sorry, your browser does not support HTML5 geolocation.");
               }


    }); 
          
