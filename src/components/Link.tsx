import { cn } from '@/utils';
import Icon, { IconCatalog } from './Icon';

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
      <Icon className="w-3 h-3 text-info" icon={IconCatalog.right} />
    </a>
  );
};

export default Link;
