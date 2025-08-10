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
        
        // Create new list item with textContent as specified
        const li = document.createElement('li');
        li.textContent = taskText;  // Directly setting textContent on li
        
        // Create remove button with exact specifications
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";
        
        // Assign onclick event to remove button exactly as specified
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };
        
        // Append elements exactly as specified
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        // Clear input exactly as specified (note lowercase 'i' in taskinput)
        taskInput.value = "";
    }
    
    // Attach event listeners exactly as specified
    
    // 1. Click event on add button
    addButton.addEventListener('click', addTask);
    
    // 2. Enter key event on input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Exact check for Enter key
            addTask();
        }
    });
});
