const tdClockContainer = document.querySelector(".js-todayclock"),
    tdClockTitle = tdClockContainer.querySelector("h1");


function getTdTime() {
    const date = new Date();
    const tdMinutes = date.getMinutes();
    const tdHours = date.getHours();
    const tdSeconds = date.getSeconds();

    const tdYear = date.getFullYear();
    const tdToday = date.getDate();
    const tdMonth = date.getMonth();
    
    tdClockTitle.innerText = `${tdYear}. ${tdMonth+1}. ${tdToday < 10 ? `0${tdToday}` : tdToday}. NOW ${tdHours < 10 ? `0${tdHours}` : tdHours} : ${tdMinutes < 10 ? `0${tdMinutes}` : tdMinutes} : ${tdSeconds < 10 ? `0${tdSeconds}` : tdSeconds}`;
}

function init() {
    getTdTime();
    setInterval(getTdTime, 1000);
}
init();