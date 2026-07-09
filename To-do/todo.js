const back = document.getElementById("back");

back.addEventListener("click", () => {
        window.location.href = "../index.html";
});



const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


let history = [];
let future = [];

let date = new Date();

const months = ["January", "February", "March","April","May","June","July","August","September","October","November","December"];

function renderCalendar() {
    calendar.innerHTML = "";
    let year = date.getFullYear();
    let month = date.getMonth();

    monthYear.innerHTML = `${months[month]} ${year}`;

    let firstDay = new Date(year, month, 1).getDay();

    let totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {

        let blank = document.createElement("div");
        calendar.appendChild(blank);

    }

    for (let i = 1; i <= totalDays; i++) {

        let day = document.createElement("div");

        day.className = "day";

        day.innerHTML = i;

        let today = new Date();

        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            day.classList.add("today");
        }

        calendar.appendChild(day);

    }

}

renderCalendar();

prev.onclick = () => {

    date.setMonth(date.getMonth() - 1);

    renderCalendar();

};

next.onclick = () => {

    date.setMonth(date.getMonth() + 1);

    renderCalendar();

};

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

    document.body.classList.toggle("dark");

};
const search = document.getElementById("search");

search.onkeyup = function () {

    let value = this.value.toLowerCase();

    let items = document.querySelectorAll("#taskList li");

    items.forEach(li => {

        let text = li.innerText.toLowerCase();

        li.style.display = text.includes(value) ? "flex" : "none";

    });

};

addBtn.onclick = function () {

    let text = prompt("Enter Task");

    if (!text) return;

    history.push(taskList.innerHTML);

    future = [];

    let li = document.createElement("li");

    li.innerHTML = `

<span class="number">${taskList.children.length + 1}</span>

<div class="task">

<p>${text}</p>

</div>

`;

    taskList.appendChild(li);

};

taskList.addEventListener("click", function (e) {

    let box = e.target.closest(".task");

    if (!box) return;

    history.push(taskList.innerHTML);

    future = [];

    box.classList.toggle("completed");

});


const undoBtn = document.getElementById("undo");
const redoBtn = document.getElementById("redo");


undoBtn.onclick = function () {

    if (history.length === 0) return;

    future.push(taskList.innerHTML);

    taskList.innerHTML = history.pop();

};

redoBtn.onclick = function () {

    if (future.length === 0) return;

    history.push(taskList.innerHTML);

    taskList.innerHTML = future.pop();

};

document.addEventListener("dblclick", function (e) {

    let task = e.target.closest(".task");

    if (!task) return;

    history.push(taskList.innerHTML);

    future = [];

    task.parentElement.remove();

    updateNumber();

});

function updateNumber() {

    document.querySelectorAll("#taskList li").forEach((li, index) => {

        li.querySelector(".number").innerHTML = index + 1;

    });

}