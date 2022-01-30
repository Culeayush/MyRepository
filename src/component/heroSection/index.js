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
                
                <svg width="420" height="150">
                    <text className="anim" x="10" y="80"
                    fill="none" stroke="#fff" 
                    stroke-width="2" font-size="60">
                    AYUSH SINGH
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
