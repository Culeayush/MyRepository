import styled, { keyframes } from "styled-components";
import HeroBG from "../../asset/heroBG1.jpg"

const breatheAnimation = keyframes`
 0% { 
        background-color: black;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

 100% { 
     background-image: url(${HeroBG});
             }
 `

const slideInFromLeft = keyframes`
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
`

export const HomeContainer = styled.div`
    animation: ${slideInFromLeft} 2s ;
    display: flex;
    width: 100%;
    height: 600px;
    background-color: #000;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    flex-direction: column;
    background-image: url(${HeroBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    /* &:hover {
        
    } */

`

export const Dialogue = styled.h3`
    text-align: center;
    width: 100%;
    max-width: 600px;
    color: #fff;
`

export const Name = styled.h1`
    font-size: 3.5rem;
    transition: all .5s ease-in-out;
    color: #fff;
    &:hover {
        text-shadow: 2px 2px 6px darkred;

    }
`

export const NameSVG = styled.text`
    font-family: 'Manrope', sans-serif;



`

export const Subtitle = styled.h3`
    font-size: 1.5rem;
    color: #fff;
`