window.addEventListener('load', loadSite)

let currentDay = new Date();
document.getElementById("current-day").innerHTML = currentDay.getDay();

let currentDayArray = new Date();
let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
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

function UpdateTime(){
        
    let today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();

    if (mins <=9){
        mins = "0" + mins
    }

    let TotalTime = hour + ":" + mins;

    if (document.layers) { 
        document.layers.time.document.write(TotalTime); 
        document.layers.time.document.close(); 
    }else if (document.all) { 
        time.innerHTML = TotalTime; 
    } 

    setTimeout("UpdateTime()", 1000) 

}

// The toDateString() method converts a date to a more readable format:
// let d = new Date();
// document.getElementById("demo").innerHTML = d.toDateString();

// let currentYear = new Date();
// document.getElementById("current-year").innerHTML = currentYear.getFullYear();


function loadSite() {
    const button = document.querySelector('button')
    button.addEventListener('click', addTodoListener)
}

function addTodoListener(event) {
    const input = event.target.previousElementSibling

    // Create and add list item (li) to list (ul)
    showTodoOnScreen(input.value)

    // Clear the input field
    input.value = ""
}
function removeTodoListener(event) {
    const li = event.target.parentElement
    li.remove()
}

function showTodoOnScreen(todoText) {
    // Create an li element 
    const li = document.createElement('li')

    // Create a checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', removeTodoListener)

    // Add the checkbox and todo text to the list item
    li.append(checkbox, todoText)

    // Add li to ul
    document.querySelector('ul').append(li)
}

// Lägg till så att det går att skrolla i todolistan om det finns många todos
// Lägg till så att alla dagars todo listas under letandra i mobilvy 
// Hightlighta aktuell månad, veckodag och cell 
