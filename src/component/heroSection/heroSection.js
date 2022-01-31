import styled, { keyframes } from "styled-components";
import HEROBG from "../../asset/bladerunner.png"

const anim = keyframes`
    0% { 
            background-color: black;
        }

    100% { 
            background-color: rgba(0,0,0,0.4) ;
        }
`

const slideInFromBottom = keyframes`
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
`

const FadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-30px);
    }


    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const ScaleUp = keyframes`
    0%{
        transform: scale(1.3);
        
    }
    100%{
        transform: scale(1);
    }
`

export const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    flex-direction: column;
    animation: ${anim} 2s ease;
    background-color: rgba(0,0,0,0.4);
    z-index: -10;
    /* background-image: url(${HEROBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    
    /* &:hover {
        
    } */

`

export const ImageContainer = styled.div`
    width: 100%;
    height: 600px;
    position: absolute;
    top: 0;
    z-index: -1;
    background-image: url(${HEROBG});
    background-position: center;
    background-size: cover;
    animation: ${ScaleUp} 3s ease;
    
`

export const Dialogue = styled.h3`
    text-align: center;
    width: 100%;
    max-width: 600px;
    color: #fff;
    animation: ${FadeIn} 4s ease;
`

export const Name = styled.h1`
    font-size: 3.5rem;
    transition: all .5s ease-in-out;
    color: #fff;
    
    &:hover {
        text-shadow: 2px 2px 6px darkred;
    }
`

export const Subtitle = styled.h3`
    font-size: 1.5rem;
    animation: ${FadeIn} 4s ease;
    color: white;
`