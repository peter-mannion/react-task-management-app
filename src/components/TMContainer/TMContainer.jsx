// Parent Container

import React, { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";

const TMContainer = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // unique ID
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="todo-list-container">
      <h2>My Tasks</h2>
      <TaskInput addTask={addTask} />
    </div>
  );
};

export default TMContainer;
