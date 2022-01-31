import React from 'react';
import {CardContainer, Title, Image, Proficiency} from './skillCardElements'

export default function SkillCard({ image, name, proficiency }) {
    const props = {
      height:'100px',
      padding:'10px',
      paddingLeft:'20px'
    }
  
    return (
        <CardContainer>
              <Image src={image} alt='none' style={{width:340, height:210}}/> 
              <div style={props}>
                <Title>{name}</Title>
                <Proficiency>{proficiency}</Proficiency>
              </div>
        </CardContainer>
      );
    }