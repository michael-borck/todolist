// Step 1: Find element
let addTaskButton = document.getElementById("add-task")
let newTaskInput = document.getElementById("task-input")


// Step 2: Write a function to implement the behaviour
function onAddTaskClicked(event) {
    let taskName = newTaskInput.value;
    newTaskInput.value = "";
    console.log(taskName)
}

// Step 3: Link element, function and event
addTaskButton.addEventListener('click',onAddTaskClicked)
