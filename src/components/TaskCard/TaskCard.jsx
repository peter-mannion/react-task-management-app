// Task item card component displays a task entry with completion checkbox and delete button.

import React from "react";
import "./TaskCard.css";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`todo-card ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        {/* Task completion toggle and action controls */}
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
