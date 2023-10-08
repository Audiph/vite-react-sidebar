import React from 'react';
import { useGlobalContext } from '../utils/context';
import Link from './Link';

const SocialLinks = () => {
  const { socialLinks } = useGlobalContext();
  return (
    <ul className="social-links">
      {socialLinks.map((item) => {
        return <Link />;
      })}
    </ul>
  );
};

export default SocialLinks;
