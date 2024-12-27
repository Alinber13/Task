import React from 'react';

    function TaskItem({ task, index, toggleTaskCompletion, deleteTask }) {
      return (
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
            className="mr-2"
          />
          <span className={task.completed ? 'line-through text-gray-500' : ''}>
            {task.name}
          </span>
          <button
            onClick={() => deleteTask(index)}
            className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      );
    }

    export default TaskItem;
