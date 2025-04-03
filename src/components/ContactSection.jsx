import React from 'react';
import './ContactSection.css';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; 

const ContactSection = () => {
    return (
        <div id="contactos" className="contact-section">
            <h2 className="contact-title">Contáctame</h2>
            <p className="contact-subtitle">
                Estoy disponible para colaborar en proyectos interesantes. ¡No dudes en contactarme!
            </p>
            <div className="contact-icons">
                <a href="https://www.linkedin.com/in/valentín-tarantino/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>
                <a href="mailto:zaheil444@gmail.com" className="contact-icon">
                    <FaEnvelope />
                    <span>Email</span>
                </a>
                <a href="https://wa.me/541149476457" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FaPhoneAlt />
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default ContactSection;