// components/Footer.jsx
import React from 'react';
import { Code, Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Daniel Poma</span>
            </div>
            <p className="text-gray-400">Ingeniero de Software & Desarrollador Full Stack</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="mailto:danielpoma45.az@mail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Daniel Fernando Poma Inga. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center">
            Hecho con <Heart className="h-4 w-4 text-red-400 mx-1" /> usando React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;