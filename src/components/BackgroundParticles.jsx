import React from 'react';
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

const BackgroundParticles = () => {
    const particlesInit = async (engine) => {
        // Carga el paquete completo de tsparticles
        await loadFull(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: "#000000", 
                },
                particles: {
                    number: {
                        value: 50, // Número de partículas
                    },
                    color: {
                        value: "#ffffff", 
                    },
                    shape: {
                        type: "circle", // Forma de las partículas
                    },
                    opacity: {
                        value: 0.8, // Opacidad de las partículas
                    },
                    size: {
                        value: 3, // Tamaño de las partículas
                        random: true, // Tamaño aleatorio
                    },
                    move: {
                        enable: true,
                        speed: 2, // Velocidad de movimiento
                        direction: "none", // Dirección del movimiento
                        random: false,
                        straight: false,
                        outMode: "out", // Las partículas desaparecen al salir del contenedor
                    },
                    links: {
                        enable: true, // Conecta las partículas con líneas
                        distance: 150, // Distancia entre partículas para conectarlas
                        color: "#ffffff", // Color de las líneas
                        opacity: 0.4, // Opacidad de las líneas
                        width: 1, // Grosor de las líneas
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse", // Las partículas se repelen al pasar el mouse
                        },
                        onClick: {
                            enable: true,
                            mode: "push", // Agrega partículas al hacer clic
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 100, // Distancia de repulsión al pasar el mouse
                        },
                        push: {
                            quantity: 4, // Cantidad de partículas añadidas al hacer clic
                        },
                    },
                },
            }}
        />
    );
};

export default BackgroundParticles;