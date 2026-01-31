// components/Education.jsx
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Formación Académica</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="flex items-start">
              <div className="bg-blue-600 p-4 rounded-lg mr-6">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ingeniero de Software</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span className="font-medium">2017 - 2024</span>
                </div>
                <p className="text-xl text-blue-600 font-semibold">Universidad Tecnológica del Perú</p>
                <p className="text-gray-700 mt-4">
                  Formación completa en ingeniería de software con especialización en desarrollo de sistemas, 
                  bases de datos, arquitectura de software y metodologías ágiles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;