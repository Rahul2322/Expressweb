const subbtn=document.getElementById("subbtn");
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');
const  datahide=document.querySelector('.middle_layer')

const getInfo=async(event)=>{
    event.preventDefault();//prevents from refreshing the whole page
    let city_value=cityName.value;

    if(city_value===""){
        city_name.innerText=`Please enter the city name before search`
        datahide.classList.remove('data_hide');
        //if nothing is entered activate data_hide property defined in css

    }
    else{
        try{
            
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=metric&appid=360b09fc988c05f8026ff181763a5187`

    const resp=await fetch(url);
    const data=await resp.json();
    const arrData=[data];
    console.log(arrData)
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
    temp.innerText=arrData[0].main.temp;
    
    
    const temp_mod=arrData[0].weather[0].main;

    //condition to check sunny or cloudy
    if(temp_mod=="Clear"){
        temp_status.innerHTML=`<i class='fas fa-sun' style='color:#eccc68;></i>`
    }else if(temp_mod=="Clouds"){
        temp_status.innerHTML=`<i class='fas fa-cloud' style='color:#f1f2f6;></i>`
    }
    else if(temp_mod=="Rain"){
        temp_status.innerHTML=`<i class='fas fa-rain' style='color:#a4b0be;></i>`
    }else{
        temp_status.innerHTML=`<i class='fas fa-sun' style='color:#eccc68;></i>`
    }

    datahide.classList.remove('data_hide')
        }
        catch{
            city_name.innerText=`Please enter the city name correctly`;
            datahide.classList.add('data_hide')
        }


    }

}

subbtn.addEventListener('click',getInfo)