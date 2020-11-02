const replyForm = document.querySelector(".reply"),
    replyInput = document.querySelector("input"),
    replyList = document.querySelector(".js-replyList");

const REPLY_LS = "toDos";

let replys = [];

function deleteReply(event) {
    const replybtn = event.target;
    const replyli = replybtn.parentNode;
    replyList.removeChild(replyli);
    const cleanReplys = replys.filter(function(reply) {
        return reply.id !== parseInt(replyli.id);
    });
    replys = cleanReplys;
    saveReplys();
} 
function saveReplys() {
    localStorage.setItem(REPLY_LS, JSON.stringify(replys)); //object -> string
}




function paintReply(text) {
    const replyli = document.createElement("li");
    const replydelBtn = document.createElement("button");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const span = document.createElement("span");
    const span2 = document.createElement("span");
    const newId = replys.length + 1;

    const msgDate = new Date();
    const msgMin = msgDate.getMinutes();
    const msgHour = msgDate.getHours();

    const MSG_ROW = "message-row";
    const MSG_ROWOWN = "message-row--own";
    const MSG_ROW_CONTENT = "message-row__content";
    const MSG_INFO = "message__info";
    const MSG_BUBBLE = "message__bubble";
    const MSG_NOW = "message__time";

    replydelBtn.innerText = "●";
    replydelBtn.addEventListener("click", deleteReply);
    span.innerText = text;
    replyli.appendChild(replydelBtn);
    replyli.appendChild(div1);
   
    div1.classList.add(MSG_ROW);
    div1.classList.add(MSG_ROWOWN);
    div1.appendChild(div2);
    div2.classList.add(MSG_ROW_CONTENT);
    div2.appendChild(div3);
    div3.classList.add(MSG_INFO);
    div3.appendChild(span);
    span.classList.add(MSG_BUBBLE);
    div3.appendChild(span2);
    span2.classList.add(MSG_NOW);
    span2.innerText = `${msgHour < 10 ? `0${msgHour}` : msgHour}:${msgMin < 10 ? `0${msgMin}` : msgMin}`;
    
    replyli.id = newId;
    replyList.appendChild(replyli);

    const replyobj = {
        text: text,
        id: newId
    };

    replys.push(replyobj);
    saveReplys();
}


function replyhandleSubmit(event) {
    event.preventDefault();
    const currentreplyValue = replyInput.value;
    paintReply(currentreplyValue);
    replyInput.value = "";
}
function loadreplys() {
    const loadedreply = localStorage.getItem(REPLY_LS);
    if(loadedreply !== null) {
        const parsedreply = JSON.parse(loadedreply);
        parsedreply.forEach(function(reply) {
            paintReply(reply.text);
        })
    } else {

    }
}
function init() {
    loadreplys();
    replyForm.addEventListener("submit", replyhandleSubmit)
    
}
init();

