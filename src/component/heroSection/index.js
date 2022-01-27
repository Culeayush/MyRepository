import React from 'react'
import {HomeContainer,
    Name, Subtitle,
    Dialogue } from './heroSection'
// import './hs.css'

export const HeroSection = () => {
    return (
        <HomeContainer id = 'Home'>
            <Dialogue>
                "As long back as I can remember, I've always wanted to create this portfolio"
            </Dialogue>

            <Name>
                Ayush Singh
            </Name>
            <Subtitle>
                this is a subtitle
            </Subtitle>
        </HomeContainer>
    )
}
