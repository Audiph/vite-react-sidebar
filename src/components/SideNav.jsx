import React from 'react';
import { FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import { useGlobalContext } from '../utils/context';

const SideNav = () => {
  const { closeSideBar, isSidebarOpen } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src="/src/logo.svg" alt="coding addict" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <NavLinks />
      <SocialLinks />
    </aside>
  );
};

export default SideNav;
