import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import AnimatedCard from './AnimatedCard';

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <AnimatedCard>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-6 text-left">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-red-500" size={20} />
                <span className="text-gray-300">neelraiyani68@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-red-500" size={20} />
                <span className="text-gray-300">+91 6351862049</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-red-500" size={20} />
                <span className="text-gray-300">Rajkot, Gujarat, India</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-red-500 mb-4 text-left">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/neelraiyani5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500/20 hover:bg-red-500 p-3 rounded-lg transition-colors"
                >
                  <Github size={24} className="text-red-500 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/neel-raiyani-59467620a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500/20 hover:bg-red-500 p-3 rounded-lg transition-colors"
                >
                  <Linkedin size={24} className="text-red-500 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-500 mb-6">Send Message</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-lg focus:outline-none focus:border-red-500 text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </AnimatedCard>
    </div>
  </section>
);

export default Contact; 