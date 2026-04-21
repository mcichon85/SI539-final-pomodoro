const taskInput = document.querySelector("body > main > div.todo-list-container > div > div > input");
const addTaskBtn = document.querySelector("body > main > div.todo-list-container > div > div > button");
const tasksContainer = document.getElementById("tasks-display");

// click add button
addTaskBtn.addEventListener('click', () => {
    if (taskInput.value === '') {
        document.getElementById('todo-list-alert').style.display = 'block';
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        tasksContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    saveData();
    taskInput.value='';
})

// or press enter key
taskInput.addEventListener("keydown", (e) => {
    // e.preventDefault();
    if (e.key == "Enter") {
        if (taskInput.value === '') {
        document.getElementById('todo-list-alert').style.display = 'block';
    } else {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        tasksContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }
    saveData();
    taskInput.value='';
    }
})

// to do list items
tasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked-task");
        saveData();
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        console.log(`Task "${e.target.parentElement.textContent}" was removed!`)
        saveData();
    }
})

function saveData() {
    localStorage.setItem("todo-list", tasksContainer.innerHTML);
}
tasksContainer.innerHTML = localStorage.getItem("todo-list");