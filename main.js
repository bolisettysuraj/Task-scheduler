document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const priorityInput = document.getElementById("priority");
    const deadlineInput = document.getElementById("deadline");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const task = taskInput.value;
        const priority = priorityInput.value;
        const deadline = deadlineInput.value;

        if (task.trim() === "" || deadline === "") {
            alert("Please enter a task and select a deadline.");
            return;
        }

        const selectedDate = new Date(deadline);
        const currentDate = new Date();

        if (selectedDate <= currentDate) {
            alert("Please select a future date for the deadline.");
            return;
        }

        const taskItem = document.createElement("div");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <p>${task}</p>
            <p>Priority: ${priority}</p>
            <p>Deadline: ${deadline}</p>
            <button class="mark-done">Mark Done</button>
        `;

        taskList.appendChild(taskItem);

        // Clear inputs after adding task
        taskInput.value = "";
        priorityInput.value = "High"; // Reset priority to default value
        deadlineInput.value = "";
    }

    // Function to mark a task as done
    function markTaskDone(event) {
        const taskItem = event.target.parentElement;
        taskItem.classList.add("done");
        event.target.disabled = true;
    }

    // Event listener for Add Task button
    addTaskButton.addEventListener("click", addTask);

    // Event listener for marking task as done
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("mark-done")) {
            markTaskDone(event);
        }
    });
});
