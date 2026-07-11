let modeBtn=document.querySelector(".mode-btn");
let body=document.body;

let ismode=false;

modeBtn.addEventListener("click",()=>{
    ismode=!ismode;

    if(ismode){
    body.style.background = "#d9dadc";
    }else{
       body.style.background="#0F172A"
    }
})






let  taskField=document.querySelector(".task-field");
let addTaskBtn=document.querySelector(".add-task-btn");






let task="";
taskField.addEventListener("input",(e)=>{
    task=e.target.value;
})
let timeField=document.querySelector(".time-field");
let taskTitle=document.querySelector(".task-title");
let tasksContainer=document.querySelector(".tasks-container")

let priorityField=document.querySelector(".priority-field");

let durationField=document.querySelector(".duration-field");
addTaskBtn.addEventListener("click",()=>{
    tasksContainer.innerHTML+=`<div class="task-item">
                    <div class="task-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="task-time">${timeField.value}</div>
                    <div class="task-main">
                        <div class="task-title">${task}</div>
                        <div class="task-meta">
                            <span class="tag category">Personal</span>
                            <span class="duration">${durationField.value} min</span>
                        </div>
                    </div>
                    <div class="task-priority low">${priorityField.value} min</div>
                    <div class="task-status">Pending</div>
                    <button class="task-action-btn">⋮</button>
                </div>` 
})
let taskCheckbox=document.querySelector(".task-checkbox");

let taskStatus=document.querySelector(".task-status");
tasksContainer.addEventListener("change",(e)=>{
    if(e.target.type==="checkbox"){
        const checkItem=e.target.closest(".task-item");

        if(e.target.checked){
            checkItem.classList.add("completed");
            taskStatus.textContent="Completed";
        }
        else{
            checkItem.classList.remove("completed")
            taskStatus.textContent="pending";

        }
    }
})
let isdblclick=false;

tasksContainer.addEventListener("dblclick",(e)=>{
        isdblclick=!isdblclick;
        const checkItem=e.target.closest(".task-item");
        if(isdblclick){
            checkItem.classList.add("active");
            taskStatus.textContent="In Progress"

        }
        else{
            checkItem.classList.remove("active")
            taskStatus.textContent="Pending";
        }
})




const searchInput = document.querySelector(".search-input");
const taskList = document.getElementById('task-list');
const notesTextarea = document.getElementById('notes-textarea');

searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();

    const tasks = document.querySelectorAll(".task-item");

    tasks.forEach((task) => {
        const titleText = task
            .querySelector(".task-title")
            .textContent
            .toLowerCase();

        if (titleText.includes(searchText)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});

notesTextarea.addEventListener("input", (e) => {
    const notesText = e.target.value;

    taskList.innerHTML += `<div class="task-item">
                    <div class="task-checkbox">
                        <input type="checkbox">
                    </div>
                    <div class="task-time">${timeField.value}</div>
                    <div class="task-main">
                        <div class="task-title">${task}</div>
                        <div class="task-meta">
                            <span class="tag category">Personal</span>
                            <span class="duration">${durationField.value} min</span>
                        </div>
                    </div>
                    <div class="task-priority low">${priorityField.value} min</div>
                    <div class="task-status">Pending</div>
                    <button class="task-action-btn">⋮</button>
                </div>` 
})

