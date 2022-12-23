let second = document.querySelector('.second');
let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');

let updateTime = () => {
       let dateNow = new Date();
       let time_in_hours = dateNow.getHours();
       let time_in_minutes = dateNow.getMinutes();
       let time_in_seconds = dateNow.getSeconds();
       second.setAttribute(
         "style",
         `transform:translate(0%,-50%) rotate(${time_in_seconds * 6 - 90}deg);`
       );
       minute.setAttribute(
         "style",
         `transform:translate(0%,-50%) rotate(${time_in_minutes * 6 - 90}deg);`
       );
       hour.setAttribute(
         "style",
         `transform:translate(0%,-50%) rotate(${
           time_in_hours * 30 - 90 + time_in_minutes / 2
         }deg);`
       );
}
updateTime();

setInterval(() => {
    updateTime();
}, 1000);
document.querySelector(".clock").style.opacity = '1';


// console.log(dateNow.getHours())