export function saveTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks(){
    let data = JSON.parse(localStorage.getItem('tasks'));
    if(data== null){
        data=[];
    }
    return data;
}