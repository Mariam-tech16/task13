var city = document.getElementById('city')
var degree = document.querySelector('.degree')
// var degree = document.querySelector('.degree')
var Icon = document.getElementById('Icon')
var last_updated = document.getElementById('last_updated')
var condition = document.getElementById('condition')
var checkfahren = document.getElementById('checkfahren')
var tommax = document.getElementById('tommax')
var tomdate = document.getElementById('tomdate')
var afterdate = document.getElementById('afterdate')
var tomlow = document.getElementById('tomlow')
var aftermax = document.getElementById('aftermax')
var afterlow = document.getElementById('afterlow')
var tetx2 = document.getElementById('tetx2')
var tetx1 = document.getElementById('tetx1')
var submit = document.getElementById('submit')
var search = document.getElementById('search')
var maindate = document.getElementById('maindate')
var toddate = document.getElementById('toddate')


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var date = new Date();
var dayName = days[date.getDay()];


async function temp(type = 'London') {
    let request = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d82f7535eec8404bb8f213955241212&q=${type}&days=3`)
    let data = await request.json()
    console.log(data)
    city.innerHTML = data.location.region;
    degree.innerHTML = data.current.temp_c + "C";
    last_updated.innerHTML = "last updated " + data.current.last_updated;
    condition.innerHTML = data.current.condition.text;
    // Icon.getAttribute(src='')=data.current.icon
    tomdate.innerHTML = data.forecast.forecastday[1].date
    tommax.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + "C"
    tomlow.innerHTML = data.forecast.forecastday[1].day.mintemp_c + "C"
    afterdate.innerHTML = data.forecast.forecastday[2].date
    aftermax.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + "C"
    afterlow.innerHTML = data.forecast.forecastday[2].day.mintemp_c + "C"
    tetx2.innerHTML = data.forecast.forecastday[2].day.condition.text
    tetx1.innerHTML = data.forecast.forecastday[1].day.condition.text
    maindate.innerHTML = data.forecast.forecastday[0].date

    tomdate.innerHTML = data.forecast.forecastday[1].dayName
    toddate.innerHTML = data.forecast.forecastday[0].dayName
    afterdate.innerHTML = data.forecast.forecastday[2].date.dayName









}
temp()
submit.addEventListener("click", function () {
    let type = search.value
    temp(type)

})


// checkfahren.addEventListener("click", function () {
//     Clickbutton();
//     { degree.innerHTML = data.current.temp_f + "F" }
// })


