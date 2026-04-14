const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span>
            <input type="checkbox" class="complete-check">
            <span class="task-text">${taskValue}</span>
        </span>
    `;

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

taskList.addEventListener('click', (event) => {

    if (event.target.tagName === 'LI' || event.target.className === 'task-text') {
        const itemToRemove = event.target.closest('li');
        itemToRemove.remove();
    }
});