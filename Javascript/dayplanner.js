function addTask() {
    const taskInput = document.getElementById("task");
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskItem = document.createElement("div");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";
    taskItem.innerText = taskValue;

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear the input field
}