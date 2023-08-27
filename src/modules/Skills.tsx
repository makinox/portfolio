import { useMemo, useState } from 'react';

import { SKILL_LEVELS, currentSkills } from '@/data/skills';
import { cn } from '@/utils';

const classes = {
  button: 'btn btn-info btn-sm w-28',
  section: 'flex justify-center flex-wrap gap-4 my-20',
};

const Skills = () => {
  const [currentLevel, setCurrentLevel] = useState(SKILL_LEVELS.MASTER);
  const levelList = Object.values(SKILL_LEVELS);
  const skillList = useMemo(() => {
    if (currentLevel === 'All') return currentSkills;
    return currentSkills.filter((skill) => skill.level === currentLevel);
  }, [currentLevel]);

  return (
    <section className="container mx-auto mt-80">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <section className={classes.section}>
        {levelList.map((level) => (
          <button
            key={level}
            className={cn(classes.button, {
              'btn-outline': currentLevel !== level,
              'btn-contained': currentLevel === level,
            })}
            onClick={() => setCurrentLevel(level)}
          >
            {level}
          </button>
        ))}
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
