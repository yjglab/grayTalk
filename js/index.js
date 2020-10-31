const toDoForm = document.querySelector(".reply"),
    toDoInput = document.querySelector("input"),
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
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    const MSG_ROW = "message-row";
    const MSG_ROWOWN = "message-row--own";
    const MSG_ROW_CONTENT = "message-row__content";
    const MSG_INFO = "message__info";
    const MSG_BUBBLE = "message__bubble";

    delBtn.innerText = "×";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    // li.appendChild(delBtn);
    li.appendChild(div1);
   
    div1.classList.add(MSG_ROW);
    div1.classList.add(MSG_ROWOWN);
    div1.appendChild(div2);
    div2.classList.add(MSG_ROW_CONTENT);
    div2.appendChild(div3);
    div3.classList.add(MSG_INFO);
    div3.appendChild(span);
    span.classList.add(MSG_BUBBLE);
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
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
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

