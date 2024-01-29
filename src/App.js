import Navbar from './components/NavBar/navbar';
import './style.css';

import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Project from './components/Project/project';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Project />
       <Contact />
    </div>
  );
}

export default App;
