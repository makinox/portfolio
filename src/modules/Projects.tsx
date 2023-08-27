import projects, { ProjectKind } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { cn } from '@/utils';
import { useMemo, useState } from 'react';

const classes = {
  button: 'btn btn-info btn-sm w-24',
};

const Projects = () => {
  const [selectedKind, setKind] = useState(ProjectKind.Web);
  const kindList = Object.values(ProjectKind);

  const projectList = useMemo(() => {
    if (selectedKind === 'All') return projects;
    return projects.filter((project) => project.kind === selectedKind);
  }, [selectedKind]);

  return (
    <section className="container mx-auto mt-40" id="projects">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <section className="flex justify-center flex-wrap gap-4 mb-20">
        {kindList.map((kind) => (
          <button
            key={kind}
            className={cn(classes.button, {
              'btn-outline': selectedKind !== kind,
              'btn-contained': selectedKind === kind,
            })}
            onClick={() => setKind(kind)}
          >
            {kind}
          </button>
        ))}
      </section>
      <section className="grid grid-cols-5 gap-10">
        {projectList.map((elements) => (
          <ProjectCard key={elements.title} {...elements} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
