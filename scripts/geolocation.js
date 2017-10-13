    $(document).ready(function(){

      if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
       
                var coords = "";
                coords += 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;               
                var url = 'https://fcc-weather-api.glitch.me/api/current?' + coords;
                 

        $.getJSON(url, function(data){
            console.log(data);  
            var tempinC = Math.round(data.main.temp); 
            var tempinF = Math.round(tempinC * 9/5 + 32);
            console.log(tempinF);
            
            var result = '<h1>' + data.name + ', ' + data.sys.country + '</h1>' + '<img src="' + data.weather[0].icon + '">';
            result += '<h2 class="desc">' + data.weather[0].description + '</h2>';
            result += '<h2 id="temp">Temperature: ' + tempinC + '&#8451;</h2>';
            result +=  '<h2>Humidity: ' + data.main.humidity + '&#x25;</h2>';
           
            
            $('#result').append(result);
            $('#tempUnit').removeClass("hidden").addClass("display");

            
			$('#tempUnit').click(function(){
          $('#temp').html('Temperature: ' + tempinF + '&#8457;');
 			  
				}); // temp button
	            
            });//getJSON
               });

          
        } else {
               alert("Sorry, your browser does not support HTML5 geolocation.");
               }


    }); 
          
