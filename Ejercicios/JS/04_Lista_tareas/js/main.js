import {addList, updateTasks } from "./tareas.js";

document.getElementById('add-btn').addEventListener('click', addList);

window.onload= function() {
    updateTasks();
}

