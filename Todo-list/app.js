function addTask(){
    let data = document.getElementById('writeTask').value;
    document.getElementById('tasks').innerHTML += `<h1 class="todo">${data}</h1>`;
    document.getElementById('writeTask').value = "";
}