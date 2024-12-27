import React from 'react';

    function ProjectItem({ project }) {
      return (
        <div className="p-4 border border-gray-300 rounded mb-2">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
        </div>
      );
    }

    export default ProjectItem;
