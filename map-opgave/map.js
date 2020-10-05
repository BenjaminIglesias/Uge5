var previousEvent;

function myFunction(event) {   
 
    if(previousEvent != null){
    previousEvent.style = 'fill:#c0c0c0;stroke:#ffffff;stroke-width:0.40000001;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none';
    }
    

     const URL = "http://restcountries.eu/rest/v1/alpha?codes="; 
     var countryCode = event.id;
     
     fetch(URL + countryCode)
     .then(response => response.json())
     .then(data => document.getElementById("changer").innerHTML = "<img src=\"https://www.countryflags.io/" + event.id +"/shiny/64.png\">" + "Country: " + data.map(data => data.name) + "<br>" + "Population: " + data.map(data => data.population)+ "<br>" + "Area: " + data.map(data => data.area)+ "<br>" + "Borders: " + data.map(data => data.borders.toString())+ "<br>" );

    document.getElementById("changer").style.backgroundColor = "pink";


    event.style.fill = "rgb(255,0,0)";
    previousEvent = event;   
    
}