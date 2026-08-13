const wallpaper = window.document.querySelector("img#wallpaper");
const title = window.document.querySelector("h1#title");
const caption = window.document.querySelector("p#caption");
const colorBackground = window.document.querySelector("body");
let currentDate = new Date();
let currentHour = currentDate.getHours().toString().padStart(2,"0");
let currentMin = currentDate.getMinutes().toString().padStart(2,"0");


function updateClock() {
    currentDate = new Date();
    title.innerHTML = `${currentHour}:${currentMin}`;
}

function updateTheme() {
    if (currentHour >= 0 && currentHour <= 4) {
        caption.innerHTML = "Good evening, sleeper!";
        wallpaper.src = "img/night.jpeg";
        colorBackground.style.backgroundColor = "#19241E";
    }

    else if (currentHour >= 5 && currentHour <= 11) {
        caption.innerHTML = "Good morning!";
        wallpaper.src = "img/morning.jpeg";
        colorBackground.style.backgroundColor = "#E4CA91";
    } 

    else if (currentHour >= 12 && currentHour <= 18) {
        caption.innerHTML = "Good afternoon!"
        wallpaper.src = "img/afternoon.jpeg";
        colorBackground.style.backgroundColor = "#E3C797";
    } 

    else if (currentHour >= 19 && currentHour <= 23) {
        caption.innerHTML = "Good evening!"
        wallpaper.src = "img/night.jpeg";
        colorBackground.style.backgroundColor = "#19241E";
    }   
}

updateClock();
updateTheme();
setInterval(updateClock, 1000);