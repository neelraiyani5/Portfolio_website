import React from 'react';
import AnimatedCard from './AnimatedCard';

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About <span className="text-red-500">Me</span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
              I'm a passionate ICT Engineering student at Marwadi University with a strong foundation 
              in full-stack development. My journey in technology has been driven by a desire to create 
              practical digital solutions that make a real impact.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center">
              With hands-on experience in the MERN stack and AWS cloud services, I specialize in 
              building scalable web applications with modern technologies. I'm particularly interested 
              in creating efficient, user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or learning about the latest trends in web development and cloud computing.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default About; 