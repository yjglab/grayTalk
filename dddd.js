const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
} 
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object -> string
}
function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoobj = {
        text: text,
        id: newId
    };

    toDos.push(toDoobj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos)
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    } else {    

    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();

//////
function sendMsg() {
    const msg_container = document.querySelector(".js-chat__container");
    const msgInput = document.querySelector(".js-input");
    const msgBtn = document.querySelector(".js-msgBtn");
    msgBtn.addEventListener("click", function (e) {
        e.preventDefault();
        submitEvent();
    });

    msgBtn.addEventListener("keydown",function(e){
        e.preventDefault();
    })

    function submitEvent(){
        if (msgInput.value) {
            const span1 = document.createElement("span");
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");
            const span2 = document.createElement("span");
            const span3 = document.createElement("span");
            span1.classList = "chat-msg--right";
            div1.classList = "chat-msg__column";
            div2.classList = "chat-msg__text";
            span2.classList = "chat__content";
            span2.innerText = msgInput.value;
            span3.classList = "chat__timestamp";
            span3.innerText = document.querySelector(".js-clock").innerText;

            span1.appendChild(div1);
            div1.appendChild(div2);
            div2.appendChild(span2);
            div2.appendChild(span3);
            window.scrollTo(0,window.innerHeight);
            msg_container.appendChild(span1);
            msgInput.value = "";
        };
    };
};
sendMsg();
