import React from 'react';

const Navbar = ({ navItems, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-red-500/20">
    <div className="px-0">
      <div className="flex items-center justify-between h-16">
        {/* Desktop Navigation */}
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-lg text-base font-semibold transition-all duration-200 shadow-none focus:outline-none focus:ring-0 focus:shadow-none
                  ${
                    activeSection === item.id
                      ? 'text-red-500 bg-red-500/10 shadow-md scale-105'
                      : 'text-white bg-transparent hover:text-red-500 hover:bg-red-500/10 hover:shadow-lg hover:scale-105'
                  }
                `}
                style={{ boxShadow: 'none' }}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-red-500 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {/* Mobile Navigation */}
    {isMenuOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-black/95 backdrop-blur-md">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-3 w-full px-5 py-3 rounded-lg text-lg font-semibold transition-all duration-200 shadow-none focus:outline-none focus:ring-0 focus:shadow-none
                ${
                  activeSection === item.id
                    ? 'text-red-500 bg-red-500/10 shadow-md scale-105'
                    : 'text-white bg-transparent hover:text-red-500 hover:bg-red-500/10 hover:shadow-lg hover:scale-105'
                }
              `}
              style={{ boxShadow: 'none' }}
            >
              <item.icon size={22} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    )}
  </nav>
);

export default Navbar; 