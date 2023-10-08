import React from 'react';
import { FaTimes } from 'react-icons/fa';

const SideNav = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/src/logo.svg" alt="coding addict" className="logo" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
    </aside>
  );
};

export default SideNav;
