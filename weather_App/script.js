const container = document.querySelector('.container')
const search = document.querySelector('.search_box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetail = document.querySelector('.weather-detail')
const error404 = document.querySelector('.not-found')

search.addEventListener('click', ()=>{


    const APIKey = "2618e2b9681e75dd31d46bc5677e00ce"
    const city = document.querySelector('.search_box input').value

    if (city === '')
        return

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {


        if(json.cod === '404'){
            container.style.height = '505px'
            weatherBox.style.display = 'none'
            weatherDetail.style.display = 'none'
            error404.style.display = 'block'
            error404.classList.add('fadeIn')
            return
        }

        error404.style.display = 'none'
        error404.classList.remove('fadeIn')
        

        const image = document.querySelector('.weather-box img')
        const temperature = document.querySelector('.weather-box .temperature')
        const description = document.querySelector('.weather-box .description')
        const humidity = document.querySelector('.weather-detail .humidity span')
        const wind = document.querySelector('.weather-detail .wind span') 


        switch (json.weather[0].main){
            case 'Clear':
                break

            case 'Rain':
                break

            case 'Snow':
                break
            
            case 'Clouds':
                break
            
            case 'Haze':
                break

            default:
                image.src = ''
        }
        

        temperature.innerHTML = `${parseInt(json.main.temp-273)}<p>°C</p>`

        description.innerHTML = `${json.weather[0].description}`

        humidity.innerHTML = `${json.main.humidity}%`

        wind.innerHTML = `${parseInt(json.wind.speed)}km/h`


        weatherBox.style.display = '';
        weatherDetail.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetail.classList.add('fadeIn');
        container.style.height = '505px';


    })

})