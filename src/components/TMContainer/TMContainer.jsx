// Parent Container

import React, { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskItem from "../TaskCard/TaskCard";

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list-container">
      <h2>My Tasks</h2>
      <TaskInput addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default TMContainer;
