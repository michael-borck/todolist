// Step 1
    let addTaskButton = document.getElementById("add-task");
    let newTaskInput = document.getElementById("task-input");
    let todoListContainer = document.getElementById("todo-list");
    let showActiveButton = document.getElementById("show-active")
     
    /* Locate where <script> tag which contains our template  */
    let templateElement = document.getElementById("list-item-template");
    /* Lets get the template, which is just all the HTML beteen the <script> tag */
    let template = templateElement.innerHTML;
    
    /* So we have now found everything in the HTML document, now we just need to
    write the function to insert the new task into the DOm tree and link it so when
    the click even on the 'Add Task" button activate our function will execute */
    
    
    
    
    /* Step 2. Lets write the function to handle the 'click' event
    ---------------------------------------------------------------*/
    function onAddTaskClicked(event) {
        /* Now lets get what was typed in the text box on the form*/
        let taskName = newTaskInput.value;
        /* Now clear the text box */
        newTaskInput.value = "";
    
        let taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    
        /* So the HTML has been update, lets insert the HTML into the DOM tree */
        todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    }
    
    
    function onTodolistClicked(event) {
        /* We need to know which element triggered the click event */
        let targetElement = event.target;
    
    
        /* Because our list items are being dynamically inserted through JavaScript
        instead of binding the click event handler to each task list item we've
        bound it to their container. When the event is triggered we walk up the DOM
        tree (using the parentElement attribute) until we find the .task element. We
        need to do this because the user could have clicked on the checkbox or on
        the text. Place a console.log(targetElement) after the second line if you
        want to see this behaviour yourself (then check the developer console). */
        while (!targetElement.classList.contains("task")) {
            targetElement = targetElement.parentElement;
        }
    
        /* Now we are at the parent, we retrieve the .checkbox element so that we
        can see if it is checked (because they could be checking or unchecking the
        item).*/
        let checkbox = targetElement.querySelector(".checkbox");
    
    
        /* If the task has been completed then we give it the class completed
        otherwise we remove the class completed. Adding a class multiple times or
        removing a class multiple times won't have any bad behaviour.
    
        Adding/removing a class will trigger the DOM to style the element as per
        the class added/removed.*/
        if (checkbox.checked) {
            targetElement.classList.add("completed");
        } else {
            targetElement.classList.remove("completed");
        }
    }
    
    function showActiveTasks(){
        let tasks = document.getElementsByClassName("task")
        for (let i =0; i < tasks.length; i++){
            if (tasks[i].classList.contains("completed")){
                tasks[i].style.display = "none"
            } else {
                tasks[i].style.display = "block"
            }
        }
    }

    /* Step 3 make the event trigger our functions
    -----------------------------------------------*/ 
    addTaskButton.addEventListener('click', onAddTaskClicked);
    todoListContainer.addEventListener('click', onTodolistClicked);
    showActiveButton.addEventListener('click', showActiveTasks);