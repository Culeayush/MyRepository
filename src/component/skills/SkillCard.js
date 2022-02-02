import React from 'react';
import {CardContainer, Title, Image, Proficiency} from './skillCardElements'
import Progressbar from './Progressbar';

export default function SkillCard({ image, name, proficiency }) {
    const props = {
      height:'100px',
      padding:'10px',
      paddingLeft:'20px'
    }
  
    const prop1 = {
      backgroundImage: `url(${image})`,
      height:"200px",
      width:"300px",
    }

    return (
        <CardContainer>
              <Image alt='none'  style={prop1}/> 
              <div style={props}>
                <Title>{name}</Title>
                <Proficiency>{proficiency}</Proficiency>
                <Progressbar Progress={proficiency} />
                {/* <Progressbar Progress="50"/> */}
              </div>
        </CardContainer>
      );
    }