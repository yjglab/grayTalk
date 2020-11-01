const tdClockContainer = document.querySelector(".js-todayclock"),
    tdClockTitle = tdClockContainer.querySelector("h1");


function getTdTime() {
    const tdDate = new Date();
    const tdMinutes = date.getMinutes();
    const tdHours = date.getHours();
    const tdSeconds = date.getSeconds();

    const tdYear = date.getFullYear();
    const tdToday = date.getDate();
    const tdMonth = date.getMonth();
    
    tdClockTitle.innerText = `${tdYear}년 ${tdMonth+1}월 ${tdToday}일 현재시각 ${tdHours < 10 ? `0${tdHours}` : tdHours}시 ${tdMinutes < 10 ? `0${tdMinutes}` : tdMinutes}분 ${tdSeconds < 10 ? `0${tdSeconds}` : tdSeconds}초`;
}

function init() {
    getTdTime();
    setInterval(getTdTime, 1000);
}
init();