// Step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")
let todoListContainer =  document.getElementById("todo-list")

let templateElement = document.getElementById("list-item-template")
let template = templateElement.innerHTML




// Step 2: Write a function to implement the behaviour
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";

    let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    todoListContainer.insertAdjacentHTML("afterbegin",taskHTML);
}

// Step 3: Link element, function and event
addTaskButton.addEventListener('click',onAddTaskClicked)
