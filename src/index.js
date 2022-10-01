import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoHeader from "./TodoHeader";

const root = ReactDOM.createRoot(document.getElementById("root"));
reloadTasks();

export function reloadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  root.render(
    <React.StrictMode>
      <TodoHeader />
      <div className="TodoList">
        {tasks.map((task, i) => (
          <div
            key={i}
            className={
              (task.completed ? "completedTask" : "ongoingTask") + " task"
            }
            onClick={() => {
              task.completed = !task.completed;
              localStorage.setItem("tasks", JSON.stringify(tasks));
              reloadTasks();
            }}
            onContextMenu={(event) => {
              tasks.splice(i, 1);
              localStorage.setItem("tasks", JSON.stringify(tasks));
              reloadTasks();
              event.preventDefault();
            }}
          >
            {task.name}
          </div>
        ))}
      </div>
    </React.StrictMode>
  );
}
