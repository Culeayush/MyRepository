import styled, {keyframes} from "styled-components";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5"

const SlideFromRight = keyframes`
    0% {
        transform: translateX(200%);
    }

    100% {
        transform: translateX(100%);
    }
`

export const SideBarContainer = styled.div`
    position: fixed;
    display: ${({isOpen}) => (isOpen ? 'grid' : 'none')};
    grid-template-rows: repeat(4,90px);
    padding-top: 90px;
    height: 100vh;
    width: 50%;
    flex-direction: column;
    background-color: rgba(200,200,200,.69);
    backdrop-filter: blur(6px);
    animation: ${SlideFromRight} 2s ease ;
    transform: translateX(100%);
    z-index: 51;
    /* @media screen and (max-width: 768px){
        display: grid;
    } */
`

export const NavLink = styled(Link)`
    display: flex;
    /* height: 60px; */
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const SidebarClose = styled(IoClose)`
    color: #000;
    stroke-width: 4px;
    margin-right: 24px;
    margin-top: 30px;
    display: none;
    @media screen and (max-width: 768px){
        display: flex;
        position: absolute;
        right: 0;
    }
`