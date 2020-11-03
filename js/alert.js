const musicBtn = document.querySelector(".fa-music");
const searchBtn = document.querySelector(".fa-search");
const calBtn = document.querySelector(".fa-calendar");
const smileBtn = document.querySelector(".fa-smile");
const rollerBtn = document.querySelector(".fa-paint-roller");
const remitBtn = document.querySelector(".fa-comment-dollar");

function noService() {
    alert(`This feature is currently not supported. Please wait for the update!
이 기능은 현재 지원되지 않습니다. 업데이트를 기다려주세요!😂

grayTalk - yukjaegyong`);
}
musicBtn.addEventListener("click", noService);
searchBtn.addEventListener("click", noService);
calBtn.addEventListener("click", noService);
smileBtn.addEventListener("click", noService);
rollerBtn.addEventListener("click", noService);
remitBtn.addEventListener("click", noService);
