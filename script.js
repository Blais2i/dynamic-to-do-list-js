document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage when page loads
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]';
        
        // Clear current task list
        taskList.innerHTML = '';
        
        // Add each stored task to the DOM
        storedTasks.forEach(taskText => {
            createTaskElement(taskText, false);
        });
    }

    // Function to create a task element (separated for reuse)
    function createTaskElement(taskText, saveToStorage = true) {
        // Create new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-btn');
        
        // Add click event to remove button
        removeButton.onclick = function() {
            // Remove from DOM
            taskList.removeChild(li);
            
            // Update Local Storage
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = storedTasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        };
        
        li.appendChild(removeButton);
        taskList.appendChild(li);
        
        // Save to Local Storage if needed
        if (saveToStorage) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Function to add a new task
    function addTask() {
        // Get and trim the task text
        const taskText = taskInput.value.trim();
        
        // Check if the input is empty
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }
        
        // Create and add the task element
        createTaskElement(taskText);
        
        // Clear input field
        taskInput.value = "";
    }
    
    // Event listeners
    addButton.addEventListener('click', addTask);
    
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
