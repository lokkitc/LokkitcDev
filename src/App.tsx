import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { content } from './config/content';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-container">
          <p>{content.footer.copyright}</p>
          <p>{content.footer.builtWith}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
