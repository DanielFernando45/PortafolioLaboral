// components/Hero.jsx
import React from 'react';
import { ArrowRight, Code, Server, Smartphone } from 'lucide-react';
import profileImage from '../assets/perfil.png';

const Hero = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Daniel Fernando Poma Inga
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-6">
              Ingeniero de Software y Sistemas
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Desarrollador Full Stack especializado en crear soluciones tecnológicas innovadoras 
              y eficientes. Apasionado por el desarrollo de software, UI/UX y la resolución de problemas.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                <Code className="h-5 w-5 mr-2" />
                <span>Frontend</span>
              </div>
              <div className="flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Server className="h-5 w-5 mr-2" />
                <span>Backend</span>
              </div>
              <div className="flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                <Smartphone className="h-5 w-5 mr-2" />
                <span>Mobile</span>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Contáctame
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="md:w-2/5">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-6xl font-bold">
                <img src={profileImage} alt="Daniel Poma" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700">Teléfono</h3>
                  <p className="text-gray-900">988027279</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Email</h3>
                  <p className="text-gray-900">danielpoma45.az@mail.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Dirección</h3>
                  <p className="text-gray-900">Urb. CD Constructores - SJL - LIMA</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700">Idiomas</h3>
                  <p className="text-gray-900">Inglés · Nivel Básico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;