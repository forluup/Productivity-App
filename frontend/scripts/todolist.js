/* ======= TO DO LIST SAVE ON RELOAD FUNCTIONALITY ======= */
// Function to save tasks to localStorage
function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];
    taskList.querySelectorAll('li').forEach(taskItem => {
        tasks.push(taskItem.firstChild.textContent); // Save only the text content to the tasks array
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    }
}

// Function to move a task up
function moveTaskUp(li) {
    const prev = li.previousElementSibling;
    if (prev) {
        li.parentNode.insertBefore(li, prev);
        saveTasks();
    }
}

// Function to move a task down
function moveTaskDown(li) {
    const next = li.nextElementSibling;
    if (next) {
        li.parentNode.insertBefore(next, li);
        saveTasks();
    }
}

// Function to add a task to the DOM
function addTaskToDOM(taskText) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(li);
        saveTasks(); // Save tasks after deletion
    };

    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Modified addTask function to use addTaskToDOM
function addTask() {
    const taskInput = document.getElementById('task');
    if (taskInput.value.trim() !== '') {
        addTaskToDOM(taskInput.value);
        saveTasks(); // Save tasks after addition
        taskInput.value = '';
    }
}

// Function to accept 'enter' keystroke for a new task
function initializeTaskInput() {
    const taskInput = document.getElementById('task');
    taskInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
}