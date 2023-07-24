let days = document.querySelector("#days h1");
let hours = document.querySelector("#hours h1")
let minutes = document.querySelector("#minutes h1")
let second = document.querySelector("#second h1")

// let d7 = new Date(year,month,day,hours,minutes,ms);
setInterval(() => {
    let fd = new Date(2023,9,22,0,0,0);
    let cd = new Date();
    let rm = (fd - cd);
// let tday = (rm/(1000*60*60*24));
    let sec = Math.floor(rm/1000);
    let min = Math.floor(sec/60);
    let hr = Math.floor(min/60);
    let tday = Math.floor(hr/24);
    hr = hr % 24;
    min =  min % 60;
    sec = sec % 60;
// console.log(tday); 
   days.textContent = Math.floor(tday)
   hours.textContent = Math.floor(hr)
   minutes.textContent = Math.floor(min)
   second.textContent = Math.floor(sec)
},1000);

    
