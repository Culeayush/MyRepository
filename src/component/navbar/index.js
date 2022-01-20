import React from 'react'
import { NavbarContainer, MyLogo, SLogo , NavlinkContainer ,Navlinks} from './NavbarElements'

export const Navbar = () => {
    return (
        <NavbarContainer>
            <MyLogo>
                {'<'}culeAyush{'>'}
            </MyLogo>
            <SLogo>
                {'<>'}
            </SLogo>
            <NavlinkContainer>
                
            <Navlinks to='AboutMe'
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}>ABOUT ME</Navlinks>
            <Navlinks>SKILLS</Navlinks>
            <Navlinks>PROJECTS</Navlinks>
            <Navlinks>HOBBIES</Navlinks>
            </NavlinkContainer>
        </NavbarContainer>
    )
}


/*
----------------------------------------------

<>   AboutMe Academics Projects 

----------------------------------------------
*/