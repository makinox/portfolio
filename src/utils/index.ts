import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export const cn = (...args: Array<ClassValue>) => twMerge(clsx(args));
