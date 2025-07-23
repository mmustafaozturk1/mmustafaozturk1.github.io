import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <Link 
        to={`/projects/${project.id}`} 
        className="group block animate-fade-in-up h-full"
        style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="rounded-lg shadow-lg h-full transition-transform duration-300 group-hover:-translate-y-2 bg-light-navy flex flex-col overflow-hidden">
        
        {/* Visual Part */}
        <div className="flex-shrink-0 relative">
          {project.id === 'sales-dashboard-analysis' && project.powerBiUrl ? (
            <div className="w-full aspect-video bg-lightest-navy">
               <iframe
                  src={project.powerBiUrl}
                  title={project.title}
                  className="w-full h-full border-0"
                  style={{ pointerEvents: 'none' }}
                  loading="lazy"
                />
               {/* This div covers the iframe to make sure the whole card is clickable */}
               <div className="absolute inset-0 z-10"></div>
            </div>
          ) : (
            <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105" />
          )}
        </div>

        {/* Text Part */}
        <div className="flex flex-col flex-grow p-6">
          <h3 className="text-lg font-bold text-lightest-slate group-hover:text-green transition-colors duration-300">{project.title}</h3>
          <p className="text-sm text-green font-mono mt-1">{project.category}</p>
          <p className="mt-2 text-sm text-light-slate leading-relaxed flex-grow">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span key={tech} className="bg-lightest-navy/70 text-green text-xs font-mono px-2 py-1 rounded-full">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;