import styled, { keyframes } from "styled-components";
import HEROBG from "../../asset/HEROBG.jpeg"

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
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
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
    /* animation: ${slideInFromBottom} 3s ease; */
    background-image: url(${HEROBG});
    background-position: center;
    background-size: cover;
    
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

export const Subtitle = styled.h3`
    font-size: 1.5rem;
    animation: ${FadeIn} 1s ease 1s;
    color: white;
`