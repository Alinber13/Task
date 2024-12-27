import React, { useState } from 'react';

    function TaskForm({ addTask }) {
      const [taskName, setTaskName] = useState('');

      const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
          addTask({ name: taskName, completed: false });
          setTaskName('');
        }
      };

      return (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Ajouter une tâche"
              className="flex-1 p-2 border border-gray-300 rounded-l"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600">
              Ajouter
            </button>
          </div>
        </form>
      );
    }

    export default TaskForm;
