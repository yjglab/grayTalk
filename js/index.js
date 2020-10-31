// const toDoForm = document.querySelector(".js-reply"),
//     toDoInput = toDoForm.querySelector("input"),
//     toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// let toDos = [];

// function handleSubmit(event) {
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDo(currentValue);
//     toDoInput.value = "";
// }
// function loadToDos() {
//     const loadedToDos = localStorage.getItem(TODOS_LS);
//     if(loadToDos !== null) {
//         const parsedToDos = JSON.parse(loadedToDos);
//         parsedToDos.forEach(function(toDo) {
//             paintToDo(toDo.text);
//         })
//     } else {

//     }
// }
// function init() {
//     loadToDos();
//     toDoForm.addEventListener("submit", handleSubmit)
    
// }
// init();


const msg = document.querySelector(".message__bubble")

function msgGo() {
    msg.style.backgroundColor = "blue";
}
function init() {
    msg.addEventListener("mouseover", msgGo);
}

init();