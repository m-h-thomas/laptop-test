console.log('My code is running.')

/* Global variables */
let userInput = '';
let currentTasks = [];
let completedTasks = [];


/* Dynamically displays items from allItems array */
const displayTasks = () => {
    let currentTasksList = document.querySelector('.currentTaskList');
    let allCurrentTasks = currentTasks.map((elm) => `<li class="currentTaskList">${elm}<input class="checkbox" type="checkbox"></li>`)
    .reduce((acc, elm) => acc += elm, '');
    currentTasksList.innerHTML = allCurrentTasks;

    // let completedTasksList = document.querySelector('.currentTaskList');
    // let allCompletedTasks = completedTasks.map((elm) => `<li class="completedTaskList">${elm}</li>`).reduce((acc, elm) => acc += elm, '')
    // completedTasksList.innerHTML = allCompletedTasks;
  };

/* Grabs the content of user-input-field and passes it button function */
const getInputValue = () => {
    let input = document.querySelector('#user-input-field')
    let addButton = document.querySelector('#add-task-button') 

    input.addEventListener('input', (eventObject) => {
        userInput = eventObject.target.value;
    });

    addButton.addEventListener('click', () => {
        currentTasks.push(userInput);
        console.log(userInput);
        input.value = '';
        displayTasks();
    })
}


/* Grabs content from current tasks and passes it completed tasks */
const completeTask = () => {
    // let complete = document.querySelector('.currentTaskList').checked = true;
    let complete = document.querySelector('.checkbox');
    complete.addEventListener('click', () => {
        if(complete.checked == true){
            completedTasks.push(complete);
        }
        displayTasks();
    })
}

getInputValue();
