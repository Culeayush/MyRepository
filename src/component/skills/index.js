import React from 'react';
import SkillCard from './SkillCard';
import {  SkillsComponent , SkillHeading 
  , CardsContainer } from './skillsElements';

export const Skills = () => {
  return (
  <SkillsComponent id = 'Skills'> 
    <SkillHeading>
      Skillset
    </SkillHeading>

    <CardsContainer>
      <SkillCard image="" name="C" proficiency="6.9"/>
      <SkillCard image="" name="Python" proficiency="6.9"/>
      <SkillCard image="" name="JAVA" proficiency="6.9"/>
      <SkillCard image="" name="HTML" proficiency="6.9"/>
      <SkillCard image="" name="CSS" proficiency="6.9"/>

    </CardsContainer>
  </SkillsComponent>
  )
};
