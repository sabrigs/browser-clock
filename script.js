function loadLogic() {
    const wallpaper = window.document.querySelector("main#wallpaper");
    const title = window.document.querySelector("h1#title");
    const caption = window.document.querySelector("p#caption");
    const colorBackground = window.document.querySelector("body");
    const currentDate = new Date();
    const currentHour = currentDate.getHours().toString().padStart(2,"0");
    const currentMin = currentDate.getMinutes().toString().padStart(2,"0");

    title.innerHTML = `${currentHour}:${currentMin}`;

    if (currentHour >= 0 && currentHour <= 4) {
        caption.innerHTML = "Good evening, sleeper!";
        wallpaper.style.backgroundImage = "url('img/night.jpeg')";
        colorBackground.style.backgroundColor = "#19241E";
    }

    else if (currentHour >= 5 && currentHour <= 11) {
        caption.innerHTML = "Good morning!";
        wallpaper.style.backgroundImage = "url('img/morning.jpeg')";
        colorBackground.style.backgroundColor = "#E4CA91";
    } 

    else if (currentHour >= 12 && currentHour <= 18) {
        caption.innerHTML = "Good afternoon!"
        wallpaper.style.backgroundImage = "url('img/afternoon.jpeg')";
        colorBackground.style.backgroundColor = "#E3C797";
    } 

    else if (currentHour >= 19 && currentHour <= 23) {
        caption.innerHTML = "Good evening!"
        wallpaper.style.backgroundImage = "url('img/night.jpeg')";
        colorBackground.style.backgroundColor = "#19241E";
    }   
}