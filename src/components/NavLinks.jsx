import React from 'react';
import { useGlobalContext } from '../utils/context';
import Link from './Link';

const NavLinks = () => {
  const { links } = useGlobalContext();

  return (
    <ul className="links">
      {links.map((item) => {
        return <Link />;
      })}
    </ul>
  );
};

export default NavLinks;
