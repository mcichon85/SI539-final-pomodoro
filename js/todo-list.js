const taskInput = document.querySelector("body > main > div.todo-list-container > div > div > input");
const addTaskBtn = document.querySelector("body > main > div.todo-list-container > div > div > button");
const tasksContainer = document.getElementById("tasks-display");

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

    taskInput.value='';
    console.log('clicked!')
})

tasksContainer.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked-task");
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        console.log(`Task "${e.target.parentElement.textContent}" was removed!`)
    }
})