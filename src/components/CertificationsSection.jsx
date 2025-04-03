import React from 'react';
import './CertificationsSection.css';

const CertificationsSection = () => {
    const certifications = [
        {
            title: 'Desarrollo Web',
            description: 'Certificación en Desarrollo Web donde aprendí a usar HTML, CSS, y Preprocesadores.',
            link: 'https://pub.coderhouse.com/legacy-certificates/66fb5b5ed1c51d20ed892171?lang=es',
        },
        {
            title: 'JavaScript',
            description: 'Certificación en JavaScript con proyectos prácticos y fundamentos avanzados.',
            link: 'https://pub.coderhouse.com/legacy-certificates/674135608f408874aed9a83a?lang=es',
        },
        {
            title: 'React',
            description: 'Certificación en React, aprendiendo a construir aplicaciones dinámicas y atractivas.',
            link: 'https://pub.coderhouse.com/legacy-certificates/679fa826e9330b55412d204a?lang=es',
        },
        {
            title: 'Carrera de Coderhouse',
            description: 'Certificación de mi trayectoria completa como desarrollador Frontend.',
            link: 'https://pub.coderhouse.com/legacy-certificates/67a05912f390738459733a87?lang=es',
        },
    ];

    return (
        <div id="certificaciones" className="certifications-section">
            <h2 className="certifications-title">Certificaciones</h2>
            <div className="certifications-container">
                {certifications.map((certification, index) => (
                    <div className="certification" key={index}>
                        <h3 className="certification-title">{certification.title}</h3>
                        <p className="certification-description">{certification.description}</p>
                        <a
                            href={certification.link}
                            className="certification-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver certificación
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CertificationsSection;