import { FaChevronRight } from 'react-icons/fa';

type LinkProps = {
  name: string;
  href: string;
};

const Link = ({ name, href }: LinkProps) => (
  <a className="flex items-center text-info gap-1 mt-2" href={href} target="_blank" referrerPolicy="no-referrer">
    <span className="text-sm">{name}</span>
    <FaChevronRight size={12} />
  </a>
);

export default Link;
