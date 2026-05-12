// This card displays the task input item submitted.

import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`todo-card ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        {/* The Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="task-checkbox"
        />
        <span className="task-text">{task.text}</span>
        <button onClick={() => deleteTask(task.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
