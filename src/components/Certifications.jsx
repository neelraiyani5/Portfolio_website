import React from 'react';
import { Award } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Certifications = ({ certifications }) => (
  <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-red-500">Certifications</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedCard key={index} delay={index * 100}>
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="flex items-center mb-4 justify-center">
                  <Award className="text-red-500 mr-3" size={24} />
                  <h3 className="text-lg font-semibold text-white text-center">{cert.title}</h3>
                </div>
                <p className="text-gray-300 mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default Certifications; 