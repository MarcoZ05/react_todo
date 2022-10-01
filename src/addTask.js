import { reloadTasks } from "./index.js";

export default function addTask() {
  const newTaskName = document.getElementById("taskInput").value;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  if (newTaskName !== "" && !tasks.some((task) => task.name === newTaskName)) {
    document.getElementById("taskInput").value = "";
    tasks.push({ name: newTaskName, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    reloadTasks();
  }
}
