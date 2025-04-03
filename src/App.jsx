import React from 'react';
import Navbar from './components/Navbar';
import BackgroundParticles from './components/BackgroundParticles';
import StartSection from './components/StartSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
        <BackgroundParticles />
            <Navbar /> 
            <StartSection />
            <ProjectsSection />
            <CertificationsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;