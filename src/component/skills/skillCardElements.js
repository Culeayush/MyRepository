import styled from "styled-components";

export const CardContainer = styled.section`
    /* border: 1px solid rgba(0,0,0,0.15); */
    border-radius: 5px;
    display: flex;
    width: 250px;
    flex-direction: column;
    background: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 16px;
    overflow: hidden;
    transition: box-shadow .2s ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 1px 1px 12px rgba(255,255,255,0.3);
    }
`

export const Image = styled.img`
    transition: 1s ease-in-out;
    &:hover{
        transform: scale(1.05);
    }
`

export const Title = styled.p`
    display: flex;
    align-self: center;
    color: #032A58;
    font-family: 'Questrial', sans-serif;
    font-size: 2rem;
    padding-top: 8px;
    padding-bottom: 6px;
`

export const Proficiency = styled.span`
    color: black;
`

