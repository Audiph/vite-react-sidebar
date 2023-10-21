import React from 'react';
import { useGlobalContext } from '../utils/context';

const SocialLinks = () => {
  const { socialLinks } = useGlobalContext();
  return (
    <ul className="social-links">
      {socialLinks.map((item) => {
        const { id, url, icon } = item;
        return (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
