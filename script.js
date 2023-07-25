var res=fetch("https://restcountries.com/v2/all");
 res.then((data)=>data.json()).then((data1)=>//console.log(data1))
 {
    for(var i=0;i<data1.length;i++)
    {
        //console.log(data1[i].latlng);
        var div=document.createElement("div");
        div.innerHTML=`<div class="card" style="width: 30rem;">
        <h3 class="card-title">${data1[i].name}</h3>
        <img src="${data1[i].flag}" height="200" weight="400" class="card-img-top" alt="...">
        <div class="card-body">
          
          <p class="card-text">Capital:${data1[i].capital}</p>
          <p class="card-text">Latlng:${data1[i].latlng}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">Country code:${data1[i].alpha3Code}</p>
          <button type="button" class="btn btn-dark" onclick="opendata(${data1[i]?.latlng[0]},${data1[i]?.latlng[1]})">Click for weather</button>
          
        </div>
      </div> `;
      document.body.append(div);

    }

})
function opendata(lat,lon)
{
  let weather=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e7c3fc1be1e0089a7262e983c6f7198b`)  
  .then((data)=>data.json()).then((data)=>
  {
    alert(`
    Temperture : ${data.main.temp} °F
    Humidity : ${data.main.humidity} g/kg
    Wind speed : ${data.wind.speed} km/hr
    cloud condition :${data.weather[0].description}`);   //printing Temp
  });
}
// //<button onclick="opendata(${data1[i]?.latlng[0]},${data1[i]?.latlng[1]})">click</button>