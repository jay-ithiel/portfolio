import React from 'react';
import Project from './project';
import ProjectsScrollMobile from './mobile/projects_scroll_mobile';
import ProjectsScrollTablet from './tablet/projects_scroll_tablet';
import ProjectsScrollDesktop from './desktop/projects_scroll_desktop';
import ProjectsScrollDesktopLarge from './desktop/projects_scroll_desktop_large';
import Carousel from '../carousel/carousel';

const Projects = ({ projects }) => {
  let id = null;
  const projectLis = Object.keys(projects).map((key, i) => {
    id = `project${i}`;
    return (
      <div key={key} className='project-li transparent' id={id}>
        <Project project={projects[key]} />
      </div>
    );
  });

  return (
    <section className='projects'>
      <h3 className='title' id='projects-title'>PROJECTS</h3>
      <Carousel items={ projects } />
    </section>
  );
};

export default Projects;

// <ProjectsScrollMobile projectLis={ projectLis } />
// <ProjectsScrollTablet projectLis={ projectLis } />
// <ProjectsScrollDesktop projectLis={ projectLis } />
// <ProjectsScrollDesktopLarge projectLis={ projectLis } />
