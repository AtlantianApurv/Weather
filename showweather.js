$(document).ready(function(){
	$("#submitcity").click(function(){

			return getWeather();
		});
});

 function getWeather(){
 		var city=$("#city").val();
 		if(city != " ")
 		{

 			$.ajax
 			({
 				url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&appid=31138404b57a580126ca91deddd29552", 
 				//type: "GET",
 				dataType:"json",
 				success: function(data)
 				{
 					var widget = result(data)
 					//console.log(data)
 					$("#showWeather").html(widget);
 					var city=$("#city").val(" ");
 				}


 
 			});
 		}
 		else
 		{ 

 			$("#error").html("<div>City field cannot be empty</div>");

 		}
 }

 function result(data)
 {	
 	var x = data.main.temp;
 	var y = x-273
 	return " <p> Temperature: " + y + " &deg , C </p>";

 }