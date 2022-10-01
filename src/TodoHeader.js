import addTask from "./addTask";

function TodoHeader() {
  return (
    <div className="TodoHeader">
      <input
        id="taskInput"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            addTask();
          }
        }}
        type="text"
        placeholder="Enter a task"
      />
      <button id="taskSubmit" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

export default TodoHeader;
