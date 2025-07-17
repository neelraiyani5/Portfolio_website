import React from 'react';
import { Code, Server, Database, Settings } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Skills = ({ skills }) => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-500/5">
    <div className="max-w-6xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Technical <span className="text-red-500">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <AnimatedCard key={category} delay={index * 100}>
              <div className="bg-black/50 border border-red-500/20 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4 justify-center">
                  {category === 'Languages' && <Code className="text-red-500 mr-2" size={24} />}
                  {category === 'Frameworks' && <Server className="text-red-500 mr-2" size={24} />}
                  {category === 'Databases' && <Database className="text-red-500 mr-2" size={24} />}
                  {category === 'Tools' && <Settings className="text-red-500 mr-2" size={24} />}
                  <h3 className="text-xl font-semibold text-red-500 text-center">{category}</h3>
                </div>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div key={skill} className="bg-red-500/10 rounded-md px-3 py-2">
                      <span className="text-white">{skill}</span>
                    </div>
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

export default Skills; 