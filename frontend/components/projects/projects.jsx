import React from 'react';
import { connect } from 'react-redux';

import Project from './project';

const Projects = ({ projects }) => {
  let id = null;
  const projectLis = Object.keys(projects).map((key, i) => {
    id = `project${i}`;
    return (
      <li key={key} className='project-li transparent' id={id}>
        <Project project={projects[key]} />
      </li>
    );
  });

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <ul className='projects-ul'>
        { projectLis }
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  projects: state.projects.index
});

export default connect(mapStateToProps, null)(Projects);
