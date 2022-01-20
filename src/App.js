import './App.css';
import { AboutMe } from './component/aboutme';
import { HeroSection } from './component/heroSection';
import { Navbar } from './component/navbar';

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
    </>
  )
    
}

export default App;
