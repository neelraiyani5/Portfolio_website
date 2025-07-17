import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Projects = ({ projects }) => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-red-500">Projects</span>
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 hover:border-red-500/50 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <h3 className="text-2xl font-bold text-red-500 mb-4 md:mb-0">{project.title}</h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                      <Github size={20} />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-300 hover:text-red-500 transition-colors">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </button>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default Projects; 