import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About1 from './components/About1';
import Technologies from './components/Technologies';
import CodingSkills from './components/CodingSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 
        bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About1 />
                <Technologies />
                <CodingSkills />
                <Projects />
                <Contact />
              </>
            } />
          </Routes>
        </div>
      </div>
      
    </Router>
  );
}

export default App;
