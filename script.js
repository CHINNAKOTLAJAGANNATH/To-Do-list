// JavaScript to handle task adding and removal
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    // Only add task if input is not empty
    if (taskValue !== "") {
        // Create a new list item
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskValue} <button class="removeBtn">Remove</button>`;

        // Add the new task to the list
        document.getElementById('taskList').appendChild(newTask);

        // Clear the input field
        taskInput.value = "";

        // Add remove functionality to the remove button
        newTask.querySelector('.removeBtn').addEventListener('click', function() {
            newTask.remove();
        });
    }
});
