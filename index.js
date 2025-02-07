console.log('My code is running.')

/* Global variables */
let userInput = '';
let currentTasks = [];
let completedTasks = [];


/* Dynamically displays items from allItems array */
const displayTasks = () => {
    let currentTasksList = document.querySelector('#new-task-list');
    let allCurrentTasks = currentTasks.map((elm) => `<div class="newTasks><li><button class="addTask">${elm}</button></li></div`)
    .reduce((acc, elm) => acc += elm, '');
    currentTasksList.innerHTML = allCurrentTasks;
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

getInputValue();