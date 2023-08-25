import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export const cn = (...args: Array<ClassValue>) => twMerge(clsx(args));
