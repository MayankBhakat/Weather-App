const cityForm = document.querySelector('form');
const card =document.querySelector('.card');
const details=document.querySelector('.details');
const time = document.querySelector('img.time');
const icon=document.querySelector('.icon');



const updateUI = (data) =>{

    console.log(data.cityDets2);
    const cityDets =data.cityDets2;          
    const weather =data.weather2;

    // update details template                  //Ref note 17
    details.innerHTML = `<div class="mt-2 mb-1 text-gray-500 text-lg">${cityDets.EnglishName.toUpperCase()}</div>

    <div class="mb-3 text-gray-400">${weather.WeatherText.toUpperCase()}</div>                                               

    <div class=" pb-6 text-4xl text-gray-600"> ${weather.Temperature.Metric.Value} &deg;C</div>   

  </div>`;

  // remove the d-none class if present

  if(card.classList.contains('hidden')){
    card.classList.remove('hidden');
  }


  // update the night/day & icon images

  let timeSrc = null;

const iconSrc = `icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconSrc);



if(weather.IsDayTime){
    timeSrc = '1320654.jpg';
}
else{
    timeSrc = 'wp2077495.jpg';
}

time.setAttribute('src',timeSrc);

};   



const updateCity = async (city) => {           //Ref note 13

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets2: cityDets,                    //Ref note 14
        weather2: weather
    };
};

cityForm.addEventListener('submit', e =>{
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();       //Ref note 12
    cityForm.reset();

    //update the ui with new city
    updateCity(city)             
        .then(data => updateUI(data))           //Ref note 15
        .catch(err => console.log(err));

});