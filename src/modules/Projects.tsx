
import { useMemo, useState } from 'react';

import ProjectCard from '@/components/ProjectCard';
import { globalClasses } from '@/constants';
import { cn, ProjectKind } from '@/utils';

const classes = {
  button: 'btn btn-info btn-sm w-28 whitespace-nowrap',
};

interface projectsProps {
  projects: Array<{
    "title": string,
    "repo": string,
    "app": string,
    "imageSrc": string,
    "imageAlt": string,
    "techList": Array<string>,
    "kind": ProjectKind
  }>
}

const Projects = ({projects}: projectsProps) => {
  const [selectedKind, setKind] = useState(ProjectKind.Web);
  const kindList = Object.values(ProjectKind).filter((kind) => kind !== ProjectKind.Old);

  const projectList = useMemo(() => {
    if (selectedKind === 'All') return projects;
    return projects.filter((project) => project.kind === selectedKind);
  }, [selectedKind]);

  return (
    <section className={cn(globalClasses.container, 'mt-40')} id="projects">
      <h2 className={cn(globalClasses.blackGradient, 'text-4xl font-bold mb-10')}>Projects</h2>
      <section className="flex justify-center flex-wrap gap-4 mb-20">
        {kindList.map((kind) => {
          const projectCount = useMemo(() => {
            if (kind === 'All') return projects.length;
            return projects.filter((project) => project.kind === kind).length;
          }, []);

          return (
            <button
              key={kind}
              className={cn(classes.button, {
                'btn-outline': selectedKind !== kind,
                'btn-contained': selectedKind === kind,
              })}
              onClick={() => setKind(kind)}
            >
              <span>{kind}</span>
              <span>{projectCount}</span>
            </button>
          );
        })}
      </section>
      <section className={cn(globalClasses.itemsGrid, 'gap-10')}>
        {projectList.map((elements) => (
          <ProjectCard key={elements.title} {...elements} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
