// Parent Container

import React, { useState, useEffect } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskCard/TaskCard";

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

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <TaskInput addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            toggleComplete={toggleComplete}
            key={task.id}
            task={task}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TMContainer;
