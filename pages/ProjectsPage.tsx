
import React from 'react';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold text-lightest-slate mb-12 flex items-center">
                All Projects
                <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;