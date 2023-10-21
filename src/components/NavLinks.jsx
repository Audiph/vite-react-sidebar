import React from 'react';
import { useGlobalContext } from '../utils/context';

const NavLinks = () => {
  const { links } = useGlobalContext();

  return (
    <ul className="links">
      {links.map((item) => {
        const { id, url, text, icon } = item;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
