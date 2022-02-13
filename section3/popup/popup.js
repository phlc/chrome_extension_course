const addTaskBtn = document.getElementById("add-task-btn");
const startTimeBtn = document.getElementById("start-time-btn");
const containerTask = document.getElementById("task-container");
let tasks = [];

startTimeBtn.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  });
});

function saveTasks() {
  chrome.storage.sync.set({
    tasks,
  });
}

chrome.storage.sync.get(["tasks"], (res) => {
  tasks = res.tasks ? res.tasks : [];
  renderTasks();
});

function renderTask(taskNum) {
  const taskRow = document.createElement("div");

  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a task";
  text.value = tasks[taskNum];
  text.addEventListener("change", () => {
    tasks[taskNum] = text.value;
    saveTasks();
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "x";

  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    deleteTask(taskNum);
    saveTasks();
  });

  containerTask.appendChild(taskRow);
}

function addTask() {
  const taskNum = tasks.length;
  tasks.push("");
  renderTask(taskNum);
  saveTasks();
}

function deleteTask(taskNum) {
  tasks.splice(taskNum, 1);
  renderTasks();
}

function renderTasks() {
  containerTask.textContent = "";
  tasks.forEach((_, taskNum) => {
    renderTask(taskNum);
  });
}

addTaskBtn.addEventListener("click", addTask);
