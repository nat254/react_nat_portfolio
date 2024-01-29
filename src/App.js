import Navbar from './components/NavBar/navbar';
import './style.css';

import Hero from './components/Hero/hero';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Project from './components/Project/project';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <About />
       <Skills />
       <Project />
    </div>
  );
}

export default App;
