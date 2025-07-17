import React from 'react';
import { Briefcase } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Experience = () => (
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-500/5">
    <div className="max-w-4xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Professional <span className="text-red-500">Experience</span>
        </h2>
        <div className="bg-black/50 border border-red-500/20 rounded-lg p-8">
          <div className="flex items-start space-x-4">
            <div className="bg-red-500 rounded-full p-2">
              <Briefcase className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-red-500 mb-2">React.js Developer Intern</h3>
              <p className="text-gray-300 font-medium mb-2">Brainy Beam Technologies</p>
              <p className="text-gray-400 mb-4">2024</p>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed responsive user interfaces using React.js and modern CSS frameworks</li>
                <li>• Integrated RESTful APIs for seamless data flow between frontend and backend</li>
                <li>• Collaborated with cross-functional teams to deliver high-quality web applications</li>
                <li>• Optimized application performance and ensured mobile responsiveness</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default Experience; 