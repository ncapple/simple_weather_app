$(document).ready(function(){
    $('form').submit(function(){
        var city= $('input[name="cityName"]').val();
        // console.log(city); 
        
        $.get("http:api.openweathermap.org/data/2.5/weather?q=" +city, "&APPID=5207fb174848372eb80b820fb51c8bc7&units=imperial", function(response){
            console.log(response);
            var html_str =`
                <h1>${response.name}</h1>
                <h1>${response.main.temp} F</h1>
            `;
            $('#weather').append(html_str);
        })
        return false;
     })

}) 
