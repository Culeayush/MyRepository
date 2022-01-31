import React from 'react'
import {HomeContainer,
    Name, Subtitle,
    Dialogue, NameSVG , ImageContainer} from './heroSection'
import './hs.css'

export const HeroSection = () => {
    return (
        <>
            <HomeContainer id = 'Home'>
                
                <Dialogue>
                    "As long back as I can remember, I've always wanted to create this portfolio"
                </Dialogue>
                
                {/* FIXME : Fix Responsiveness of Name Tag */}
                <svg className="svgCont" width="490"
                 height="154">
                    <text className="anim" x="10" y="80"
                    fill="none" stroke="#fff" 
                    stroke-width="2" font-size="35">
                    Hey ,this is 
                    <tspan className="svgText" fontSize="55" > Ayush Singh
                    </tspan>
                    </text>
                </svg>

                <Subtitle>
                    this is a subtitle
                </Subtitle>
                
            </HomeContainer>
            <ImageContainer/>
        </>
        
    )
}
