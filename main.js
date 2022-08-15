let newTask = document.querySelector("#new-task");
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUL = document.querySelector('.complete-list ul');


let createTask = function (task) {
    let listItem = document.createElement('li');
    let checkbox = document.createElement('input');
    let label = document.createElement('label');
    label.innerText = task;
    checkbox.type = 'checkbox';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    return listItem;
}
let addTask = function (event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    bindCompeleteTask(listItem, completeTask)
}
let completeTask = function () {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUL.appendChild(listItem);
    bindIncompeleteTask(listItem, deleteTask);
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let bindIncompeleteTask = function (taskItem, checked) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checked;
}
let bindCompeleteTask = function (taskItem, deleted) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleted;
}
form.addEventListener('submit', addTask)