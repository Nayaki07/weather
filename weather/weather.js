const API_KEY = "2c497f4bd6a14df661ab40767870a787"; 


const searchButton = document.getElementById("searchButton");

const cityInput = document.getElementById("cityInput");

const weatherDisplay = document.getElementById("weatherDisplay");


searchButton.addEventListener("click", async () => {
 
   const cityName = cityInput.value;
 
   if (!cityName) {
  
     alert("Please enter a city name");
 
       return;
   
  }

   
 try {
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
  
   const data = await response.json();

   
   if (data.cod === "404") {
    
    weatherDisplay.innerHTML = `<p>City not found. Please try again.</p>`;
  
      return;
  
     }

       
     weatherDisplay.innerHTML = `
    
      <h2>${data.name}, ${data.sys.country}</h2>
      
     <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        
     <p><strong>Weather:</strong> ${data.weather[0].description}</p>
         
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather Icon">
       
    `;
   
  } catch (error) {
       
  console.error("Error fetching weather data:", error);
      
  weatherDisplay.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
    
}

});