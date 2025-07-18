import React from 'react';
import { ChevronDown, Download, Github } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import neelImg from '../assets/neel.png';

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-24">
    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-black to-red-900/10"></div>
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
      <AnimatedCard>
        <div className="mb-8">
          <div className="w-72 h-72 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 p-0.5">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
              <img src={neelImg} alt="Neel Raiyani" className="w-full h-full object-cover rounded-full scale-125" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-red-500">Neel Raiyani</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Full Stack Developer | ICT Engineering Student
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative digital solutions with expertise in MERN stack, 
            AWS cloud services, and modern web technologies. Currently pursuing ICT Engineering 
            at Marwadi University.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              style={{ color: 'white' }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
            <a
              href="https://github.com/neelraiyani5"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </AnimatedCard>
      <AnimatedCard delay={300}>
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-red-500 mx-auto" />
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default Hero; 