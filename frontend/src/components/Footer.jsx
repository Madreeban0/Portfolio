import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-around text-center gap-8">
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Reeban Austrive</h2>
          <p className="text-gray-600">Aspired Full-Stack Developer | Freelancer | Business Enthusiast </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Connect</h3>
          <ul className="space-y-1 text-gray-700">
            <li><a href="https://www.linkedin.com/in/reeban-austrive-11019a254/" className="hover:text-blue-600" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/Madreeban0" className="hover:text-blue-600" target="_blank" rel="noreferrer">GitHub</a></li>
           
            <li><a href="https://www.instagram.com/moxey_00/" className="hover:text-blue-600" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-sm text-gray-500">
        <p>© 2025 Reeban Austrive P. All rights reserved.</p>
        <p>
          Built with React & <span className="text-blue-500">❤️</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;