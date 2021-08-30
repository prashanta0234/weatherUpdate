const  searchBtn=()=>{
    const searchId=document.getElementById('input');
    const searchValue=searchId.value;
    searchId.value='';
    // add api
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=d5114b0e173eb8c15ba9e22264206c27`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>getCity(data))
}
const getCity=(city)=>{
    if(city.cod==404){
        const error=document.getElementById('error');
        error.innerHTML=`<h4>please enter a valid city</h4>`;
        const updateFeild=document.getElementById('updateField');
        updateFeild.textContent='';
    }
    else{
        error.textContent='';
        const temp=`${(city.main.temp-273.15).toFixed(1)}`;
        const updateFeild=document.getElementById('updateField');
        updateFeild.innerHTML=`
        <img src="https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png" alt="">
        <h1 id="dhk">${city.name} <span style="font-size:20px">${city.sys.country}</span></h1>
        <h3><span>${temp}</span>&deg;C</h3>
        <h1 class="lead">${city.weather[0].main}</h1>`  
    }
}