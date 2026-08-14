let currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMin = currentDate.getMinutes();


function getCurrentTime() {
    currentDate = new Date();
    currentHour = currentDate.getHours();
    currentMin = currentDate.getMinutes();
}

function updateClock() {
    const title = window.document.querySelector("h1#title");

    const hour = currentHour.toString().padStart(2,"0");
    const min = currentMin.toString().padStart(2,"0");

    title.innerHTML = `${hour}:${min}`;
}

function updateTheme() {
    let wallpaper = window.document.querySelector("img#wallpaper");
    let caption = window.document.querySelector("p#caption");
    let colorBackground = window.document.querySelector("body");

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

getCurrentTime();
updateClock();
updateTheme();

setInterval( () => {
    getCurrentTime();
    updateClock();
    updateTheme();
}, 1000)