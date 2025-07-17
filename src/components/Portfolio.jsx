import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Server, Settings, Award, Briefcase, User, Home, FileText, MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import AnimatedCard from './AnimatedCard';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = {
    Languages: ['JavaScript','HTML','CSS', 'SQL'],
    Frameworks: ['React.js', 'Node.js', 'Express.js'],
    Databases: ['MongoDB', 'MySQL', 'Firestore'],
    Tools: ['Git', 'AWS', 'Postman', 'VS Code','AWS (Basic)']
  };

  const projects = [
    {
      title: 'Embroidery Lace Management & E-commerce System',
      description: 'Full-stack MERN application with real-time inventory tracking, role-based authentication, and comprehensive CRUD operations for managing embroidery products.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      github: '#',
      live: '#'
    }
  ];

  const certifications = [
    {
      title: 'React and Node.js Full Stack',
      issuer: 'Udemy',
      year: '2024'
    },
    {
      title: 'SQL Programming',
      issuer: 'Oracle',
      year: '2024'
    },
    {
      title: 'AWS Cloud Foundations',
      issuer: 'AWS Academy',
      year: '2024'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Server },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <About />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <Skills skills={skills} />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <Projects projects={projects} />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <Experience />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <Certifications certifications={certifications} />
      <hr className="my-16 border-t-2 border-red-500/30 w-2/3 mx-auto" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio; 