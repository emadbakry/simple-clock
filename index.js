let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

setInterval(() => {
    
    let dateNow = new Date();
    
    let time_in_hours = dateNow.getHours();
    let time_in_minutes = dateNow.getMinutes();
    let time_in_seconds = dateNow.getSeconds();

    // console.log(`${time_in_seconds} ${time_in_minutes} ${time_in_hours}`);

    second.setAttribute(
      "style",
      `transform:translate(0%,-50%) rotate(${(time_in_seconds * 6) - 90}deg);`
    );
    minute.setAttribute(
      "style",
      `transform:translate(0%,-50%) rotate(${(time_in_minutes * 6) - 90}deg);`
    );
    hour.setAttribute(
      "style",
      `transform:translate(0%,-50%) rotate(${(time_in_hours * 30) - 90 + (time_in_minutes / 2)}deg);`
    );
}, 1000);

// console.log(dateNow.getHours())