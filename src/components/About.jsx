// components/About.jsx
import React from 'react';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Perfil Profesional</h3>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  Persona responsable, dinámica, creativa y con muchas ganas de trabajar y de aprender, 
                  con facilidad de adaptación y capacidad de trabajar en equipo, con iniciativa para 
                  resolver problemas eficientemente, lograr metas y objetivos trazados por la empresa.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Objetivo Profesional</h4>
                <p className="text-gray-700 leading-relaxed">
                  Poner en práctica todos los conocimientos adquiridos durante mi formación y poder 
                  formar parte de un equipo de trabajo que me permita desarrollarme personal y 
                  profesionalmente, en el logro de las metas generales de la empresa y poder adquirir 
                  así una mayor experiencia y superación personal.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Mis Fortalezas</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Trabajo en Equipo</h4>
                  <p className="text-gray-600">Excelente capacidad para colaborar en grupos multidisciplinarios.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Creatividad</h4>
                  <p className="text-gray-600">Enfoque innovador para resolver problemas complejos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Adaptabilidad</h4>
                  <p className="text-gray-600">Rápida adaptación a nuevas tecnologías y entornos de trabajo.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Orientación a Resultados</h4>
                  <p className="text-gray-600">Enfoque en lograr metas y objetivos establecidos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;