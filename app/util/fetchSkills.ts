// fetchSkills.ts
import { SubSkill } from '../types/api/subSkill';

export async function fetchSkillsByTableNum(tableNum: number): Promise<SubSkill[]> {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/subskills', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const skills: SubSkill[] = await response.json();

    return skills
      .filter(skill => skill.table_num === tableNum)
      .sort((a, b) => a.position - b.position);
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return [];
  }
}
