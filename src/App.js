import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import CoverLetter from './components/CoverLetter';
import Networking from './components/Networking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Certifications />
        <Achievements />
        <CoverLetter />
        <Networking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
