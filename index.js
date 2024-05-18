let task = document.getElementById('task');
let taskList = document.querySelector('.task-list');
let btn = document.getElementById('task-submit');
let proto = document.getElementById('prototype');

proto.hidden = true;

function addTask(event) {
    event.preventDefault(); // Prevent form submission
    if (task.value.trim() === '') {
      return; // Don't add empty tasks
    }
    let taskDiv = document.createElement('div');
    let newTask = document.createElement('p');
    let completeTask = document.createElement('button');
    let deleteTask = document.createElement('button');
    completeTask.textContent = "Done";
    deleteTask.textContent = "Delete";
    newTask.textContent = task.value;
    taskDiv.appendChild(newTask);
    taskDiv.appendChild(completeTask);
    taskDiv.appendChild(deleteTask);
    taskDiv.classList.add('task-item');
    newTask.classList.add('newTask');
    completeTask.classList.add('done');
    deleteTask.classList.add('del');
    completeTask.addEventListener('click', done);
    deleteTask.addEventListener('click', del);
    taskList.appendChild(taskDiv);
    task.value = '';
  }

  function del(event) {
    let taskDiv = event.target.parentNode;
    taskList.removeChild(taskDiv);
  }

  function done(event) {
    let taskDiv = event.target.parentNode;
    window.prompt('What time?');
    taskList.removeChild(taskDiv);
  }

  btn.addEventListener('click', addTask);