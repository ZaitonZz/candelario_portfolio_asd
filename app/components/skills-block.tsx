// SkillsBlock.tsx
import React from 'react';
import DynamicComponent from '../components/dynamic-component';
import { SubSkill } from '../types/api/subSkill';

interface SkillsBlockProps {
  skills: SubSkill[];
}

const SkillsBlock: React.FC<SkillsBlockProps> = ({ skills }) => {
  return (
    <div>
      {skills.map(skill => (
        <div key={skill.id} className="flex items-center mt-8 font-light text-xl">
          <DynamicComponent iconName={skill.icon} className="mr-4 fill-primary" />
          {skill.skill_text}
        </div>
      ))}
    </div>
  );
};

export default SkillsBlock;
