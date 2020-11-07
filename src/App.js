import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
//import { Home } from './Home';


function App() {

  // Landing
  /* const [cohete, setCohete] = useState('fly')
   const [condition, setCondition] = useState(null)
 
   const loadPage = () => {
     setCohete('dimensiones')
     setTimeout(() => setCondition(true), 3000)
   }
 */
  return (
    <div className="app">
      {/*<div className="landingPage">
      }  {!condition && <h1 style={{ position: 'absolute', top: '2vh' }} >Portfolio de OscarGO</h1>}
        <Home cohete={cohete} />
        {!condition && <h1>Haz click para ver "Landing Page"</h1>}
      {condition && <h1> </h1>}
      </div>
      { condition &&*/}
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
