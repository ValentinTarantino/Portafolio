import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Vidas Caninas',
            description: 'Plataforma diseñada para proporcionar información sobre distintas razas de perros. La web ofrece una interfaz amigable y adaptable, con secciones detalladas sobre su cuidado. Implementada con HTML, SASS y JavaScript, incluye un diseño responsivo para diferentes dispositivos.',
            link: 'http://vidascaninas.netlify.app',
            image: '/img/vidascaninas.png' 
        },
        {
            title: 'Lista de tareas',
            description: 'Aplicación interactiva desarrollada con JavaScript para la gestión de tareas. Permite a los usuarios agregar, eliminar y marcar tareas como completadas en una interfaz dinámica. Utiliza localStorage para almacenar datos y manipulación del DOM para actualizar la lista en tiempo real.',
            link: 'http://listadodetareassss.netlify.app',
            image: '/img/lista.png' 
        },
        {
            title: 'Mundo Gamer',
            description: 'Aplicación web desarrollada con React que permite a los usuarios explorar y comprar productos relacionados con computadoras y accesorios gaming. Cuenta con navegación por categorías, detalles de productos, carrito de compras y procesamiento de pedidos. Implementa gestión de inventario y opciones de pago para una experiencia fluida.',
            link: 'http://react-gilt-kappa.vercel.app',
            image: '/img/mundogamer.png' 
        }
    ];

    return (
        <div className="projects-section">
            <div className="projects-header">
                <h1 id="proyectos" className="projects-title">Mis Proyectos</h1>
                <h2 className="projects-subtitle">Algunos de mis trabajos destacados</h2>
            </div>
            <div className="container">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            Ver proyecto
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;