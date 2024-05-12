"use client"
import React, { useState, useEffect } from "react";
import DynamicComponent from "../components/dynamic-component";
import { subSkill } from "../types/api/subSkill";

const SkillsBlock = ({ tableNum }: { tableNum: number }) => {

    async function fetchSkillsByTableNum(tableNum: number): Promise<subSkill[]> {
        try {
          const response = await fetch('http://127.0.0.1:8000/api/subskills', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            cache: 'no-store',
          });
      
          const skills: subSkill[] = await response.json();
          console.log(skills)
      
          return skills
            .filter(skill => skill.table_num === tableNum)
            .sort((a, b) => a.position - b.position);
        } catch (error) {
          console.error('Failed to fetch skills:', error);
          return [];
        }
      }

  const [skills, setSkills] = useState<subSkill[]>([]);

  useEffect(() => {
    fetchSkillsByTableNum(tableNum).then(setSkills);
  }, [tableNum]);

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
