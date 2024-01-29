import Navbar from './components/NavBar/navbar';
import './style.css';

import Hero from './components/Hero/hero';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <About />
    </div>
  );
}

export default App;
