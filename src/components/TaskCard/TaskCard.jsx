// This card displays the task input item submitted.

import React from "react";

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`todo-card ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
