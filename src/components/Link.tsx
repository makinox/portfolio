import { cn } from '@/utils';
import { FaChevronRight } from 'react-icons/fa';

type LinkProps = {
  name: string;
  href: string;
  className?: string;
};

const Link = ({ name, href, className }: LinkProps) => {
  const classes = {
    container: cn('flex items-center text-info gap-1', className),
  };

  return (
    <a className={classes.container} href={href} target="_blank" referrerPolicy="no-referrer">
      <span className="text-sm">{name}</span>
      <FaChevronRight size={12} />
    </a>
  );
};

export default Link;
