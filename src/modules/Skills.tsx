import { useMemo, useState } from 'react';

import { SKILL_LEVELS, currentSkills } from '@/data/skills';
import { globalClasses } from '@/constants';
import { cn } from '@/utils';

const classes = {
  button: 'btn btn-info btn-sm w-36 whitespace-nowrap',
  section: 'flex justify-center flex-wrap gap-4 mb-20',
};

const Skills = () => {
  const [currentLevel, setCurrentLevel] = useState(SKILL_LEVELS.MASTER);
  const levelList = Object.values(SKILL_LEVELS);
  const skillList = useMemo(() => {
    if (currentLevel === 'All') return currentSkills;
    return currentSkills.filter((skill) => skill.level === currentLevel);
  }, [currentLevel]);

  return (
    <section className={cn(globalClasses.container, 'mt-40')} id="skills">
      <h2 className={cn(globalClasses.blackGradient, 'text-4xl font-bold mb-10')}>Skills</h2>
      <section className={classes.section}>
        {levelList.map((level) => {
          const levelCount = useMemo(() => {
            if (level === SKILL_LEVELS.ALL) return currentSkills.length;
            return currentSkills.filter((skill) => skill.level === level).length;
          }, []);

          return (
            <button
              key={level}
              className={cn(classes.button, {
                'btn-outline': currentLevel !== level,
                'btn-contained': currentLevel === level,
              })}
              onClick={() => setCurrentLevel(level)}
            >
              <span>{level}</span>
              <span>{levelCount}</span>
            </button>
          );
        })}
      </section>
      <section className={classes.section}>
        {skillList.map((skill) => (
          <article className="badge badge-ghost" key={skill.name}>
            {skill.name}
          </article>
        ))}
      </section>
      <section className="flex justify-center">
        <a className="btn btn-info" href="https://drive.google.com/drive/folders/0B1M5FQ2FYAeQVFhzMGptMFRNMFE?usp=sharing" target="_blank">
          See Certificates
        </a>
      </section>
    </section>
  );
};

export default Skills;
