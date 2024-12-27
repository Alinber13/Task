import React, { useState } from 'react';
    import TaskForm from '../components/TaskForm.jsx';
    import TaskList from '../components/TaskList.jsx';

    function MyTasks() {
      const [tasks, setTasks] = useState([]);

      const addTask = (task) => {
        setTasks([...tasks, task]);
      };

      const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
      };

      const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      };

      return (
        <div>
          <h1 className="text-2xl font-bold">Mes tâches</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
        </div>
      );
    }

    export default MyTasks;
