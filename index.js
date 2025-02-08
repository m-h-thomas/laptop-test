console.log('My code is running.')

/* Global variables */
let userInput = '';
let currentTasks = [];
let completedTasks = [];


/* Dynamically displays items from allItems array */
const displayTasks = () => {
    let currentTasksList = document.querySelector('.currentTaskList');
    let completedTasksList = document.querySelector('.completedTaskList');
    let allCurrentTasks = currentTasks.map((elm, index) => `<li class="currentTaskList" data-index="${index}">${elm}<input class="checkbox" type="checkbox"></li>`)
    .reduce((acc, elm) => acc += elm, '');
    currentTasksList.innerHTML = allCurrentTasks;



    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const taskItem = event.target.closest('li');  // Get the <li> containing the checkbox
            const index = taskItem.getAttribute('data-index');  // Get the index of the task
            const taskText = currentTasks[index]; // Get the task text based on the index

            if (event.target.checked) {
                // If the checkbox is checked, move the task to the completed list
                completedTasksList.innerHTML = `<li class="completedTaskItem">${taskText}</li>`;
                taskItem.remove();  // Remove the task from the current list
                currentTasks.splice(index, 1);  // Remove the task from the currentTasks array
            }
        });
    });
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


// /* Grabs content from current tasks and passes it completed tasks */
// const completeTask = () => {
//     // let complete = document.querySelector('.currentTaskList').checked = true;
//     let complete = document.querySelector('.checkbox');
//     complete.addEventListener('click', () => {
//         if(complete.checked == true){
//             completedTasks.push(complete);
//         }
//         displayTasks();
//     })
// }

getInputValue();