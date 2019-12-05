window.addEventListener('load', loadSite)

let currentDay = new Date();
document.getElementById("current-day").innerHTML = currentDay.getDay();

let currentDayArray = new Date();
let days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
document.getElementById("current-day").innerHTML = days[currentDay.getDay()];

let currentHour = new Date();
document.getElementById("current-hour").innerHTML = currentHour.getHours();

let currentMinutes = new Date();
document.getElementById("current-minutes").innerHTML = currentMinutes.getMinutes();

let currentDate = new Date();
document.getElementById("current-date").innerHTML = currentDate.getDate();

let currentMonth = new Date();
document.getElementById("current-month").innerHTML = currentMonth.getMonth();

let currentMonthArray = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("current-month").innerHTML = months[currentMonth.getMonth()];




function loadSite() {
    const button = document.querySelector('button')
    button.addEventListener('click', addTodoListener)
}

function addTodoListener(event) {
    const input = event.target.previousElementSibling

    // Create and add list item (li) to list (ul)
    showTodoOnScreen(input.value)

    input.value = ""

    todoArray.push(addTodo);
}

function removeTodoListener(event) {
    const li = event.target.parentElement
    li.remove()
}

function showTodoOnScreen(todoText) {
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', removeTodoListener)

    li.append(checkbox, todoText,)

    // Add li to ul
    document.querySelector('ul').append(li)
}



// let todoArray = [];

// const addTodos = (ev)=>{
//     ev.preventDefault();
//     let todo = {
//         date: document.getElementById('add-date').value,
//         todo: document.getElementById('add-todo').value
//         }
//         todoArray.push(todo);
//         document.querySelector('form').reset();
        
//         //saving to localStorage
//         localStorage.setItem('MyTodoList', JSON.stringify(todoArray) );
//     }
//     document.addEventListener('DOMContentLoaded', ()=>{
//         document.getElementById('button').addEventListener('click', addTodos);
//     });




var todoList = document.getElementById("add-todo");
localStorage.setItem("todoArray", todoList.value);


function store(){
    var todoList= document.getElementById("add-todo");
    localStorage.setItem("todoArray", todoList.value);
   }

   function saveSettings() {
    localStorage.settings = JSON.stringify(settings)
}

function readSettings() {
    const settings = JSON.parse(localStorage.settings)    
}
