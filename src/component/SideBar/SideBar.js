import React from 'react';
import { SideBarContainer, NavLink
  , SidebarClose } from './SideBarElements';

export const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <SidebarClose onClick={toggle}/>
      <NavLink>About Me</NavLink>
      <NavLink>Skills</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Hobbies</NavLink>
    </SideBarContainer>
    
    );
};
