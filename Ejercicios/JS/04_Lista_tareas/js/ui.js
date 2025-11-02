import { deleteTask } from "./tareas.js";

export const taskList= document.getElementById('taskList');

export function addTaskToList(taskTxt){
    const li= document.createElement('li');
    li.textContent= taskTxt;

    const deleteBtn= document.createElement('button');
    deleteBtn.textContent= 'Eliminar';
    deleteBtn.className= 'delete'
    deleteBtn.onclick= function(){
        deleteTask(taskTxt);
    };

    li.appendChild(deleteBtn);
    taskList.prepend(li);
}