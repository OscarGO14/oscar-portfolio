import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacto from './components/Contacto';
import Footer from './components/Footer';


function App() {

  return (
    <div className="app">

      <div>
        <Header />
        <About />
        <Resume />
        <Projects />
        <Contacto />
        <Footer />
      </div>
    </div>
  );
}

export default App;
