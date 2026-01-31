// components/Projects.jsx
import React from 'react';
import { ExternalLink, Globe, Smartphone, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Intranet Empresarial",
      description: "Desarrollo completo de una intranet corporativa con backend y frontend personalizados para gestión interna de la empresa.",
      tech: ["React", "Node.js", "MySQL", "Docker", "Tailwind"],
      link: "https://intranet.alejandriaconsultora.com/",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Aplicación Móvil Empresarial",
      description: "Aplicación Android completa y funcional desarrollada para automatizar procesos internos de la empresa.",
      tech: ["Android", "Java/Kotlin", "API REST", "Firebase"],
      link: "https://play.google.com/store/apps/details?id=com.aleja.pe&hl=es_PE",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "ERP Personalizado",
      description: "Diseño y desarrollo de un sistema ERP con análisis de procesos y diseño UI/UX en Figma.",
      tech: ["Figma", "React", "Nest.js", "PostgreSQL"],
      icon: <Code className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos más significativos en los que he trabajado recientemente.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className={`${project.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
                  >
                    Ver Proyecto
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Enfoque en Soluciones Integrales</h3>
          <p className="text-gray-700 mb-6">
            Mi experiencia abarca desde el análisis de procesos empresariales hasta el desarrollo completo 
            de soluciones tecnológicas, incluyendo diseño UI/UX, desarrollo frontend y backend, implementación 
            de aplicaciones móviles y optimización SEO.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4+</div>
              <div className="text-gray-600">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-gray-600">Tecnologías Dominadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">Compromiso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;