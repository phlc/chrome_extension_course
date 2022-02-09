const addTaskBtn = document.getElementById("add-task-btn");
const startTimeBtn = document.getElementById("start-task-btn");
const containerTask = document.getElementById("task-container");
const tasks = [];

function addTask() {
  const taskNum = tasks.length;
  tasks.push("");
  const taskRow = document.createElement("div");
  const text = document.createElement("input");

  text.type = "text";
  text.placeholder = "Enter a task";
  text.addEventListener("change", () => {
    tasks[taskNum] = text.value;
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "x";
  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    tasks.splice(taskNum, 1);
    taskRow.remove();
  });

  containerTask.appendChild(taskRow);

  //   const text = `
  //     <div id="task-container">
  //         <input type="text" />
  //     <input type="button" value="X" />
  //     </div>
  // `;
  //   containerTask.insertAdjacentHTML("afterbegin", text);
}

addTaskBtn.addEventListener("click", addTask);
