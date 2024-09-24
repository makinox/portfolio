import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

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
  Web = 'Web',
  Game = 'Game',
  Native = 'Native',
  Library = 'Library',
  Old = 'Old',
  All = 'All',
}