const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".chat__timestamp");


function getTime() {
    const date = new Date();


    const year = date.getFullYear();
    const today = date.getDate();
    const month = date.getMonth();
    
    
    clockTitle.innerText = `TODAY'S DATE - ${year}. ${month + 1}. ${today < 10 ? `0${today}` : today}`
    
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();