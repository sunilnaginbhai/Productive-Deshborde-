const goalInput = document.getElementById("goalInput");
const addBtn = document.getElementById("addGoal");
const goalList = document.getElementById("goalList");
const progressBar = document.getElementById("progressBar");
const completedCount = document.getElementById("completedCount");
const emptyState = document.getElementById("emptyState");
const closeBtn = document.querySelector(".close-btn");
const popup = document.querySelector(".goal-popup");

let goals = JSON.parse(localStorage.getItem("dailyGoals")) || [];

renderGoals();

addBtn.addEventListener("click", addGoal);

goalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addGoal();
    }
});

closeBtn.addEventListener("click", () => {
    window.location.href="../index.html"
});

function addGoal() {

    let text = goalInput.value.trim();

    if (text === "") return;

    goals.push({
        id: Date.now(),
        text: text,
        completed: false
    });

    goalInput.value = "";

    saveGoals();
    renderGoals();
}

function renderGoals() {

    goalList.innerHTML = "";

    if (goals.length === 0) {
        emptyState.style.display = "block";
    } else {
        emptyState.style.display = "none";
    }

    goals.forEach(goal => {

        let card = document.createElement("div");
        card.className = "goal";

        if (goal.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <div class="goal-left">
                <input type="checkbox" ${goal.completed ? "checked" : ""}>
                <span>${goal.text}</span>
            </div>

            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;

        const checkbox = card.querySelector("input");
        const deleteBtn = card.querySelector(".delete");

        checkbox.addEventListener("change", () => {

            goal.completed = checkbox.checked;

            saveGoals();
            renderGoals();

        });

        deleteBtn.addEventListener("click", () => {

            goals = goals.filter(g => g.id !== goal.id);

            saveGoals();
            renderGoals();

        });

        goalList.appendChild(card);

    });

    updateProgress();
}

function updateProgress() {

    let total = goals.length;

    let completed = goals.filter(goal => goal.completed).length;

    completedCount.textContent = `${completed} of ${total} Completed`;

    let percent = 0;

    if (total > 0) {
        percent = (completed / total) * 100;
    }

    progressBar.style.width = percent + "%";
}

function saveGoals() {

    localStorage.setItem("dailyGoals", JSON.stringify(goals));

}