const cityInput=document.querySelector(".input-city");
const searchBtn=document.querySelector(".search-btn");

const apiKey='d0124bcb628ea5528568723ff0cdf3f9'

const topInfo=document.querySelector(".top-info");
const weatherMain=document.querySelector(".weather-main");


const mid=document.querySelector(".mid") 
const bot=document.querySelector(".bot") 

const citytext=document.querySelector(".city");
const temptext=document.querySelector(".temp");
const conditionText=document.querySelector(".condition");
const humidityum=document.querySelector(".humidityum");
const windSpeed=document.querySelector(".wind-speed");
const currentDatee=document.querySelector(".date");
const weatherImg=document.querySelector(".weather-Img");

searchBtn.addEventListener("click",()=>{
    if(cityInput.value.trim()!=''){
        updateWhetherInfo(cityInput.value)
        cityInput.value='';
        cityInput.blur();
    }
})

cityInput.addEventListener("keydown",(event)=>{
    if(event.key=='Enter' && cityInput.value.trim()!='' ){
        updateWhetherInfo(cityInput.value);
        cityInput.value='';
        cityInput.blur();
    }
})


async function getFetchData(endPont,city){
    const aipUrl=`https://api.openweathermap.org/data/2.5/${endPont}?q=${city}&appid=${apiKey}&units=metric`

    const response= await fetch(aipUrl);

    return response.json();
}

function getWetherIcon(id){
    if(id<=232) return 'thunderstorm.svg'
    if(id<=321) return 'drizzle.svg'
    if(id<=531) return 'rain.svg'
    if(id<=622) return 'show.svg'
    if(id<=781) return 'atmosphere.svg'
    if(id<=800) return 'clear.svg'
    else return 'clouds.svg' 
}

function getCurrentDate(){
    const currentDate=new Date();

    const option={
        weekday:'short',
        day:'2-digit',
        month:'short'
    }
    return currentDate.toLocaleDateString('en-GB',option)
}
currentDatee.textContent=getCurrentDate();

async function updateWhetherInfo(city){
    const whetherData=await getFetchData("weather",city);
    if(whetherData.cod!==200){
        alert("Enter valid City Name")
        return;
    }
    console.log(whetherData);

     const {
        name,
        main:{temp,humidity},
        weather:[{id,main}],
        wind:{speed}
    } =whetherData;

    citytext.textContent=name;
    humidityum.textContent=humidity + '%';
    temptext.textContent= temp + '°C';
    conditionText.textContent=main;
    windSpeed.textContent=speed + ' m/s';
    weatherImg.src=`/image/Whether-svgs/${getWetherIcon(id)}`;    
}







