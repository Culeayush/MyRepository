import React from 'react'
import { NavbarContainer
    , MyLogo, SLogo 
    , NavlinkContainer 
    ,Navlinks , NavbarCC
    , Homelink } from './NavbarElements'

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarCC>
                <Homelink to='Home'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>
                    <MyLogo>
                        {'<'}culeAyush{'>'}
                    </MyLogo>
                    <SLogo>
                        {'<>'}
                    </SLogo>
                </Homelink>
                
                <NavlinkContainer>
                    
                <Navlinks to='AboutMe'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>ABOUT ME</Navlinks>
                <Navlinks to='Skills'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>SKILLS</Navlinks>
                <Navlinks to='Projects'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>PROJECTS</Navlinks>
                <Navlinks to='Hobbies'
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}>HOBBIES</Navlinks>
                </NavlinkContainer>
            </NavbarCC>
        </NavbarContainer>
    )
}


/*
----------------------------------------------

<>   AboutMe Academics Projects 

----------------------------------------------
*/