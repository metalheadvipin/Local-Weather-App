    $(document).ready(function(){

      if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(function(position){
       
                var coords = "";
                coords += 'lat=' + position.coords.latitude + '&lon=' + position.coords.longitude;               
                var url = 'https://fcc-weather-api.glitch.me/api/current?' + coords;
                 

        $.getJSON(url, function(data){
             
            var tempinC = Math.round(data.main.temp); 
            var tempinF = Math.round(tempinC * 9/5 + 32);

                                 
            var result = '<h1>' + data.name + ', ' + data.sys.country + '</h1>' + '<img src="' + data.weather[0].icon + '">';
            result += '<h2 class="desc">' + data.weather[0].description + '</h2>';
            result += '<h2 id="temp">Temperature: ' + tempinC + '&deg;' + unit +'</h2>';
            result +=  '<h2>Humidity: ' + data.main.humidity + '&#x25;</h2>';
          
            var unit ='C';
           
            
            $('#result').append(result);
            $('#tempUnit').removeClass("hidden").addClass("display");

            
			$('#tempUnit').click(function(){
        console.log(unit);
        if (unit == 'C'){
          $('#temp').html('Temperature: ' + tempinF + '&#8457;');
           unit == 'F';
        }
        else{
           $('#temp').html('Temperature: ' + tempinF + '&#8457;');
          
        }
          			  
				}); // temp button
          console.log(unit);
	            
            });//getJSON
               });

          
        } else {
               alert("Sorry, your browser does not support HTML5 geolocation.");
               }


    }); 
          
