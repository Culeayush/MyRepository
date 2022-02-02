import React from 'react';
import SkillCard from './SkillCard';
import {  SkillsComponent , SkillHeading 
  , CardsContainer } from './skillsElements';
import clang from '../../asset/clang.png'
import plang from '../../asset/pythonL.png'
import jlang from '../../asset/javaLang.svg'
import csslang from '../../asset/cssLang.png'
import htmllang from '../../asset/htmlLang.png'

export const Skills = () => {
  return (
  <SkillsComponent id = 'Skills'> 
    <SkillHeading>
      Skillset
    </SkillHeading>

    <CardsContainer>
      <SkillCard image= {clang} name="C" proficiency="69"/>
      <SkillCard image= {plang} name="Python" proficiency="60"/>
      <SkillCard image= {jlang} name="JAVA" proficiency="30"/>
      <SkillCard image= {htmllang} name="HTML" proficiency="100"/>
      <SkillCard image= {csslang} name="CSS" proficiency="90"/>

    </CardsContainer>
  </SkillsComponent>
  )
};
