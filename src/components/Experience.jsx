// components/Experience.jsx
import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Analista de Sistemas",
      company: "Alejandria Consultora",
      period: "AGOS 2024 - ENE 2026",
      location: "Lima, Perú",
      responsibilities: [
        "Análisis de Procesos de la empresa sobre el ERP",
        "Desarrollo UI/UX en Figma sobre crear un ERP",
        "Desarrollo completo de una intranet (Backend y Frontend)",
        "Gestión de actividades de proyectos en el área de TI",
        "Creación de una App para la empresa completo y funcional",
        "Soporte tanto software y hardware de la empresa",
        "Modificaciones en la página web aplicando SEO"
      ]
    },
    {
      title: "Practicante Desarrollador Frontend",
      company: "Eco Ambiental",
      period: "SEP 2023 - DIC 2023",
      location: "Lima, Perú",
      responsibilities: [
        "Integración de API services",
        "Arquitectura Pago de nóminas y suministros",
        "Uso del framework Angular"
      ]
    },
    {
      title: "Auxiliar Administrativo",
      company: "Municipalidad Distrital de Pichanáqui",
      period: "SEP 2021 - DIC 2022",
      location: "Pichanáqui, Perú",
      responsibilities: [
        "Manejo de los Sistemas Administrativos SIAF y SIGA",
        "Gestión y seguimiento de los Comprobantes de Pago y registro de los pagos de los Trabajadores",
        "Pago de nóminas y suministros"
      ]
    },
    {
      title: "Auxiliar Oficina de Tecnología de la Información",
      company: "Municipalidad Distrital de San Ramón",
      period: "SEP 2020 - DIC 2020",
      location: "San Ramón, Perú",
      responsibilities: [
        "Mantenimiento Correctivo del Hardware de los Equipos Tecnológicos Administrativos",
        "Actualización de los Sistemas Informáticos"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experiencia Laboral</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-8' : 'md:pl-1/2 md:pr-8'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6 relative">
               

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;