import React from 'react';
    import ProjectItem from './ProjectItem.jsx';

    function ProjectList({ projects }) {
      return (
        <div>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      );
    }

    export default ProjectList;
