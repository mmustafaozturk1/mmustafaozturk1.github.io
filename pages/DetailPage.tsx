
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = PROJECTS.find(p => p.id === id);
    setProject(foundProject || null);
  }, [id]);
  
  const handleIframeLoad = () => {
    setIsIframeLoading(false);
  };

  const backLinkPath = '/projects';
  const backLinkText = 'Back to Projects';

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-lightest-slate">Content not found.</h2>
        <Link to="/" className="text-green hover:underline mt-4 inline-block">
          &larr; Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <Link to={backLinkPath} className="text-green hover:underline mb-8 inline-block font-mono">
        &larr; {backLinkText}
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-lightest-slate">{project.title}</h1>

      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
        <span className="font-mono text-green">{project.category}</span>
        <span className="text-slate">|</span>
        {project.technologies.map(tech => (
          <span key={tech} className="text-light-slate">{tech}</span>
        ))}
      </div>

      <div className="prose prose-lg max-w-none mt-12 text-light-slate prose-headings:text-lightest-slate prose-strong:text-lightest-slate prose-a:text-green prose-blockquote:border-l-green prose-blockquote:text-slate">
        <div dangerouslySetInnerHTML={{ __html: project.fullContent }} />
      </div>

      {project && project.powerBiUrl && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-lightest-slate mb-6">
            Interactive Dashboard
          </h2>
          <div className="relative w-full aspect-video bg-light-navy rounded-lg overflow-hidden shadow-2xl">
            {isIframeLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="animate-spin h-8 w-8 text-green mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-2 text-slate">Loading Dashboard...</p>
                </div>
              </div>
            )}
              <iframe
              title={project.title}
              width="100%"
              height="100%"
              src={project.powerBiUrl}
              onLoad={handleIframeLoad}
              className={`absolute top-0 left-0 w-full h-full ${isIframeLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;