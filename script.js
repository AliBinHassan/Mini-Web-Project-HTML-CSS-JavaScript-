document.addEventListener("DOMContentLoaded", () => {

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev-month");
const nextBtn = document.getElementById("next-month");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

function renderCalendar(){

calendar.innerHTML = "";

const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

const storageKey = `${months[currentMonth]}-${currentYear}-calendar`;

let savedData = JSON.parse(localStorage.getItem(storageKey)) || {};

monthYear.textContent = `${months[currentMonth]} ${currentYear}`;

for(let day = 1; day <= daysInMonth; day++){

const dayBox = document.createElement("div");

dayBox.classList.add("day");

dayBox.textContent = day;

if(savedData[day]){
dayBox.classList.add(savedData[day]);
}

dayBox.addEventListener("click", () => {

toggleDay(dayBox, day, savedData, storageKey);

updateStats();

});

calendar.appendChild(dayBox);

}

updateStats();

}

function toggleDay(element, day, data, key){

if(element.classList.contains("selected-red")){

element.classList.remove("selected-red");
element.classList.add("selected-blue");

data[day] = "selected-blue";

}
else if(element.classList.contains("selected-blue")){

element.classList.remove("selected-blue");

delete data[day];

}
else{

element.classList.add("selected-red");

data[day] = "selected-red";

}

localStorage.setItem(key, JSON.stringify(data));

}

function updateStats(){

const red = document.querySelectorAll(".selected-red").length;
const blue = document.querySelectorAll(".selected-blue").length;

document.getElementById("red-count").textContent = red;
document.getElementById("blue-count").textContent = blue;

const blueValue = blue * 2;
const totalBlocks = red + blueValue;

document.getElementById("Total-count").textContent = totalBlocks;

const payment = totalBlocks * 500;

document.getElementById("Total-pay").textContent = payment;

}

prevBtn.addEventListener("click", () => {

currentMonth--;

if(currentMonth < 0){
currentMonth = 11;
currentYear--;
}

renderCalendar();

});

nextBtn.addEventListener("click", () => {

currentMonth++;

if(currentMonth > 11){
currentMonth = 0;
currentYear++;
}

renderCalendar();

});

renderCalendar();

});