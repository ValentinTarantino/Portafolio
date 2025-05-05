import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight; 
            const sectionPosition = section.offsetTop - navbarHeight - 10; 
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth', 
            });
        }
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button onClick={() => scrollToSection('inicio')} className="navbar-link">Inicio</button>
                </li>
                <li className="navbar-item">
                    <button onClick={() => scrollToSection('proyectos')} className="navbar-link">Proyectos</button>
                </li>
                <li className="navbar-item">
                    <button onClick={() => scrollToSection('certificaciones')} className="navbar-link">Certificaciones</button>
                </li>
                <li className="navbar-item">
                    <button onClick={() => scrollToSection('contactos')} className="navbar-link">Contactos</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

