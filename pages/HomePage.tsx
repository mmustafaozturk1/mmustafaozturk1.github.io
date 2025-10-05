import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';
import { PROJECTS } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const HomePage: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.id === 'sales-dashboard-analysis');

  return (
    <div className="space-y-1 md:space-y-4">
      <section className="min-h-[45vh] flex flex-col justify-center animate-fade-in-up">
        <p className="text-green font-mono mb-4 text-md">Hi, I am</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">Mustafa Ozturk.</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mt-2">I build insights from data.</h2>
        <p className="max-w-xl mt-6 text-lg text-light-slate">
          PL-300-certified Data & Business Intelligence Analyst specializing in turning raw data into executive-level insights with Power BI, SQL, and Python.
        </p>
      </section>

      <section className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
        <h2 className="text-3xl font-bold text-lightest-slate mb-8 flex items-center">
            Featured Projects
            <span className="flex-grow h-px bg-lightest-navy ml-6"></span>
        </h2>
        <div className="grid grid-cols-1 gap-6">
            {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/projects" className="inline-block bg-transparent border border-green text-green font-mono text-lg px-8 py-4 rounded-md hover:bg-green/10 transition-colors">
                View All Projects
            </Link>
        </div>
      </section>


      {/* Floating social links for desktop */}
      <div className="hidden md:block fixed bottom-0 left-12 w-10">
          <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mt-6">
              <SocialLinks />
          </div>
      </div>
       <div className="hidden md:block fixed bottom-0 right-12 w-10">
          <div className="flex flex-col items-center space-y-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate after:mt-6">
              <a href="mailto:muhammetmustafaozturk@gmail.com" className="font-mono text-sm tracking-widest text-slate hover:text-green transition-colors duration-300" style={{ writingMode: 'vertical-rl' }}>
                  muhammetmustafaozturk@gmail.com
              </a>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
