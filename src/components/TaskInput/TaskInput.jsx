// Task input component renders a form for creating new todo items.

import React, { useState } from "react";
import "./TaskInput.css";

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return; // Prevent user adding an empty task
    addTask(taskText);
    setTaskText(""); // Clear task input field after adding a new task
  };

  return (
    <form onSubmit={handleSubmit} className="task-input-form">
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task ..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit" className="add-task-btn">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
