import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { Home } from './Home';
import { Zoom } from 'react-reveal'

function App() {

  // Landing
  const [cohete, setCohete] = useState('fly')
  const fly = () => {
    setCohete('dimensiones')
  }


  const [condition, setCondition] = useState(null)
  const loadPage = () => {
    setTimeout(() => setCondition(true), 3000)
  }

  return (
    <div onClick={loadPage} className="app">
      <div className="landingPage">
        {!condition && <h1 style={{ position: 'absolute', top: '2vh' }} >Portfolio de OscarGO</h1>}
        <Home cohete={cohete} fly={fly} />
        {!condition && <h1>Click en la Luna para ver "Landing Page"</h1>}
        {condition && <h1></h1>}
      </div>
      { condition &&
        <div>
          <Zoom>
            <Header />
          </Zoom>
          <About />
          <Resume />
          <Projects />
          <Contacto />
          <Footer />
        </div>
      }



    </div>
  );
}

export default App;
