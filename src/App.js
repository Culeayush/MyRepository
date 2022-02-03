import React,{useState} from 'react';
import './App.css';
import { AboutMe  } from './component/aboutme';
import { HeroSection } from './component/heroSection';
import { Hobbies } from './component/hobbies';
import { Navbar } from './component/navbar';
import { Projects } from './component/projects';
import { SideBar } from './component/SideBar/SideBar';
import { Skills } from './component/skills';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Hobbies/>
    </>
  )
}

export default App;
