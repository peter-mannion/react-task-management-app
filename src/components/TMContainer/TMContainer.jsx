// Parent Container

import React, { useState, useEffect } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskCard/TaskCard";
import "./TMContainer.css";

const TMContainer = () => {
  // Retain "tasks" even if user refreshes the browswer or navigates between TMContainer and ContactForm - initialize state using browser's local storage.
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save to browser's local storage whenever "tasks" array is updated
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // unique ID
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const [filter, setFilter] = useState("All"); // Default to 'All'

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Incomplete") return !task.completed;
    return true; // For 'All'
  });

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <div className="input-form-filter-btns">
        <TaskInput addTask={addTask} />

        <div className="filter-btn-group">
          <button
            className={`filter-btn ${filter === "All" ? "active" : ""}`}
            onClick={() => setFilter("All")}
          >
            All
          </button>

          <button
            className={`filter-btn ${filter === "Incomplete" ? "active" : ""}`}
            onClick={() => setFilter("Incomplete")}
          >
            Incomplete
          </button>

          <button
            className={`filter-btn ${filter === "Completed" ? "active" : ""}`}
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
        </div>

        {/* Pass filteredTasks instead of tasks */}
        <div>
          {filteredTasks.map((task) => (
            <TaskItem
              toggleComplete={toggleComplete}
              key={task.id}
              task={task}
              deleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TMContainer;
