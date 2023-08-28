import { useMemo } from 'react';

import type { ProjectType } from '@/data/projects';
import Link from '@/components/Link';

const ProjectCard = ({ title, techList, app, repo, imageSrc, imageAlt }: ProjectType) => {
  const techText = techList.join(', ');

  const buttons = useMemo(() => {
    const buttonMemo = [];
    if (app) buttonMemo.push({ href: app, text: 'Visit' });
    if (repo) buttonMemo.push({ href: repo, text: 'Source' });
    return buttonMemo;
  }, []);

  return (
    <article>
      <img className="p-2 border border-neutral-200 bg-base-100 object-cover w-full h-40 rounded-xl" src={imageSrc} alt={imageAlt} />
      <h3 className="text-2xl font-semibold my-2">{title}</h3>
      <p>{techText}</p>
      <div className="flex gap-x-4 items-center">
        {buttons.map((button) => (
          <Link key={button.text} href={button.href} name={button.text} className="mt-2" />
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
