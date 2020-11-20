import React, { useState } from "react";
import "./App.css";
import NewTask from "./NewTask";
import { Clock } from "./Clock";
import TasksList from "./TasksList";
import Footer from "./Footer";

export default function App() {
  const [newTask, setNewTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prev) => ({ ...prev, id: Date.now(), [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };

  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter((task) => task.id !== taskIdToRemove));
  };

  return (
    <div className="App container">
      <header className="header">
        <h1>To-Do List</h1>
        <Clock />
      </header>
      <div className="NewTask">
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="TasksList">
        <TasksList allTasks={allTasks} handleDelete={handleDelete} />
      </div>
      <Footer />
    </div>
  );
}
