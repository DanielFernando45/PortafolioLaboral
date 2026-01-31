// components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = {
    "Frontend": ["React", "Angular", "Tailwind CSS"],
    "Backend": ["Nest.js", "Node.js", "MySQL"],
    "Herramientas": ["Docker", "Git/GitHub", "Figma"],
    "Metodologías": ["Scrum", "UI/UX Design", "SEO"]
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Habilidades & Tecnologías</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b">{category}</h3>
              <div className="space-y-4">
                {items.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Certificaciones</h3>
          <div className="flex items-center justify-between bg-blue-50 p-6 rounded-lg">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Scrum Foundation Professional Certificate</h4>
              <p className="text-gray-600">CertiProf · ABR 2024</p>
            </div>
            <div className="hidden md:block">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                Certificado Profesional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;