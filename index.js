const apiKey='cab04e0c68004a3e0a4eb74f4ff39803';

            const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

            const searchBox = document.querySelector(".search input");
            const searchBtn = document.querySelector(".search button");
            const weatherIcon =  document.querySelector(".weather-icon")

            async function chechkWeather(city){
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

                if(response.status==404){
                    //if the city name is invalid it will give 404 error
                    document.querySelector(".error").style.display="block"
                    document.querySelector(".weather").style.display= "none";
                }else{
                    
                

                var data= await response.json();

                // console.log(data);

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ; 
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

                // update img according to weather condition

                if(data.weather[0].main=='Clouds'){
                    weatherIcon.src = "clouds.png"
                }
                else if(data.weather[0].main=='Clear'){
                    weatherIcon.src = "clear.png"
                }
                else if(data.weather[0].main=='Drizzle'){
                    weatherIcon.src = "drizzle.png"
                }
                else if(data.weather[0].main=='Mist'){
                    weatherIcon.src = "mist.png"
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display="none"
                }

            }

            searchBtn.addEventListener("click" , ()=>{
                chechkWeather(searchBox.value)
            })
            
