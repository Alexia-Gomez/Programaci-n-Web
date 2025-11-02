import { saveTasks, loadTasks } from "./storage.js";
import { addTaskToList, taskList } from "./ui.js";

export let tasks=[];

export function addList(){
    let taskTxt= document.getElementById('newTask').value;

    if(!(taskTxt === '')){
        tasks.push(taskTxt);
        addTaskToList(taskTxt);
        saveTasks(tasks);
        document.getElementById('newTask').value= '';
    }
}

export function deleteTask(taskTxt){
    let tasksC= [];

    for(let i=0; i< tasks.length; i++){
        if(tasks[i] !== taskTxt){
            tasksC.push(tasks[i]);
        }
    }
    tasks= tasksC;
    saveTasks(tasks);
    updateTasks();
}

export function updateTasks(){
    tasks= loadTasks();
    taskList.innerHTML= '';
    tasks.forEach(e => {
        addTaskToList(e);
    });
}

