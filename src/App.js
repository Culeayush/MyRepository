import './App.css';
import { AboutMe  } from './component/aboutme';
import { HeroSection } from './component/heroSection';
import { Hobbies } from './component/hobbies';
import { Navbar } from './component/navbar';
import { Projects } from './component/projects';
import { Skills } from './component/skills';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Hobbies/>
    </>
  )
    
}

export default App;
