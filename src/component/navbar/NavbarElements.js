import styled from "styled-components";
import { Link } from "react-scroll";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: #000;
    position: fixed;
    display:flex;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    justify-content: center;
`

export const MyLogo = styled.span`
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    display: inline-block;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const SLogo = styled.span`
    color: #fff;
    font-family: 'Roboto Mono', monospace;
    display: none;

    @media screen and (max-width: 768px){
        display: inline-block;
    }
`
export const NavlinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 30px;
`

export const Navlinks = styled(Link)`
    color: white;
    padding-right: 20px;
    cursor: pointer;
`