import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import { portfolio } from './data/portfolio';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="brand" href="#home" aria-label={`${portfolio.personal.name} home`}>
          <span>KAP</span>
          <small>{portfolio.personal.location}</small>
        </a>
      </header>

      <main>
        <Hero
          personal={portfolio.personal}
          resume={portfolio.resume}
        />
        <About personal={portfolio.personal} />
        <Projects projects={portfolio.projects} />
        <Experience experience={portfolio.experience} />
        <Skills skills={portfolio.skills} />
        <Education education={portfolio.education} />
        <Resume resume={portfolio.resume} />
        <Contact personal={portfolio.personal} />
      </main>
    </div>
  );
}

export default App;
