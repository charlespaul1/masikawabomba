import React from 'react';
import ProjectCard from './ProjectsCard';
import './Projects.css';
import littleLemon from './LittleLemon.png'
import todo from './To-do.png'
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Little Lemon Restaurant',
      image: littleLemon,
      description: 'The front-end project created a seamless and user-friendly reservation booking page for a restaurant. It featured an intuitive form for entering details like date, time, guest count, and preferences. Real-time data integration ensured availability visibility, and feedback mechanisms guided users with validation messages. After submission, users received a reassuring confirmation message and could opt for email or SMS confirmations. The project simplified the reservation process, offering a user-friendly interface and improving customer satisfaction.',
      githubLink: 'https://github.com/charlespaul1/capstone_project',
      previewLink: 'https://project1.com',
    },
    {
      id: 2,
      title: 'To-do App',
      image: todo,
      description: 'This is the description of Project 2.',
      githubLink: 'https://github.com/project2',
      previewLink: 'https://project2.com',
    },

  ];

  return (
    <div>
    <h1>Recent Projects</h1>
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
  );
};

export default ProjectsPage;
