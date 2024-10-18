import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getImage } from 'astro:assets';

export const cn = (...args: Array<ClassValue>) => twMerge(clsx(args));

export enum SKILL_LEVELS {
  MASTER = 'Master',
  EXPERT = 'Expert',
  PROFICIENT = 'Proficient',
  BEGINNER = 'Beginner',
  INTERESTED = 'Interested',
  ALL = 'All',
}

export enum ProjectKind {
  Key = 'Key',
  Web = 'Web',
  Game = 'Game',
  Native = 'Native',
  Library = 'Library',
  Old = 'Old',
  All = 'All',
}

export const transformPortfolioData = async (data: any): Promise<any> => {
  let people = [];
  for await (const person of data.people) {
    const src = (await getImage({ src: person.src, format: 'webp', width: 80, height: 80 })).src;
    people.push({ ...person, src });
  }

  let projects = [];
  for await (const project of data.projects) {
    const imageSrc = (await getImage({ src: project.imageSrc, format: 'webp', width: 350, height: 160 })).src;
    projects.push({ ...project, imageSrc });
  }

  let talks = [];
  for await (const talk of data.talks) {
    const image = (await getImage({ src: talk.image, format: 'webp', width: 350, height: 160 })).src;
    talks.push({ ...talk, image });
  }

  let works = [];
  for await (const work of data.work) {
    const image = (await getImage({ src: work.image, format: 'webp', width: 80, height: 80 })).src;
    works.push({ ...work, image });
  }

  const skills = data.skills;
  return { people, projects, talks, work: works, skills };
};
