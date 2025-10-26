const taskList= document.getElementById('taskList');
let tasks= [];

function addList(){

    let taskTxt = document.getElementById('newTask').value;

    if(!(taskTxt === '')){
        tasks.push(taskTxt);
        addTaskToList(taskTxt);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        document.getElementById('newTask').value= '';
    }
}

function addTaskToList(taskTxt){
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

function deleteTask(taskTxt){
    let tasksC= [];

    for(let i=0; i< tasks.length; i++){
        if(tasks[i] !== taskTxt){
            tasksC.push(tasks[i]);
        }
    }
    tasks= tasksC;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateTasks();
}


function updateTasks(){
    tasks= JSON.parse(localStorage.getItem('tasks'));
    if(tasks== null){
        tasks= [];
    }
    taskList.innerHTML= '';
    tasks.forEach(e => {
        addTaskToList(e);
    });
}

window.onload= function() {
    updateTasks();
}
