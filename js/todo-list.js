const taskInput = document.querySelector("#add-tasks");
const addTaskBtn = document.querySelector("body > main > div.todo-list-container > div > fieldset > button");
const tasksContainer = document.getElementById("tasks-display");

function addTask() {
    if (taskInput.value === '') {
        document.getElementById('todo-list-alert').style.display = 'block';
        return;
    } else {
        let li = document.createElement('li');
        li.setAttribute("tabindex", "0");
        li.innerHTML = taskInput.value;

        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        // Used Google Gemini and prompted it to help make the todo list items more accesisble (espeically for tabbing)
        span.setAttribute("role", "button"); // Tells screen readers this is a button
        span.setAttribute("aria-label", "Delete task"); //Adds aria explanation of what the button does
        span.setAttribute("tabindex", "0"); // Makes the 'X' tabbable

        tasksContainer.appendChild(li);
        li.appendChild(span);
    }
    saveData();
    taskInput.value='';
}

function handleTasks(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked-task");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        console.log(`Task "${e.target.parentElement.textContent}" was removed!`)
        saveData();
    }
}

// adding tasks to todo list
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// striking out or removing tasks from todo list
tasksContainer.addEventListener('click', handleTasks);
tasksContainer.addEventListener('keydown', (e) => {
    if (e.key === "Enter") handleTasks(e);
});

function saveData() {
    localStorage.setItem("todo-list", tasksContainer.innerHTML);
}
tasksContainer.innerHTML = localStorage.getItem("todo-list");