document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create new list item
        const li = document.createElement('li');
        
        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Add click event to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append remove button to list item
        li.appendChild(removeButton);
        
        // Add list item to task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = "";
    }
    
    // Event listener for add button click
    addButton.addEventListener('click', addTask);
    
    // Event listener for Enter key in input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
