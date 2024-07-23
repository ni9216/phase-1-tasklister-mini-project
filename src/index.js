
  // your code here
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    function addDeleteButton(taskItem) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        taskItem.appendChild(deleteButton);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskInput = document.getElementById('task');
        const priorityInput = document.getElementById('priority');
        const task = taskInput.value;
        const priority = priorityInput.value;
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = task;

        // Set the color based on priority
        if (priority === 'high') {
            newTaskItem.style.color = 'red';
        } else if (priority === 'medium') {
            newTaskItem.style.color = 'yellow';
        } else if (priority === 'low') {
            newTaskItem.style.color = 'green';
        }

        addDeleteButton(newTaskItem);
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
        priorityInput.value = 'low'; // reset to default priority
    });
});

