import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context';

const Home = () => {
  const { setOpenModal, setOpenSideBar } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={() => setOpenSideBar(true)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setOpenModal(true)}>
        show modal
      </button>
    </main>
  );
};

export default Home;
