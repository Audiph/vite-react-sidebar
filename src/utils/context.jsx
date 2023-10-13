import { createContext, useContext, useState } from 'react';
import { links, social } from '../data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        links,
        socialLinks: social,
        isModalOpen,
        isSidebarOpen,
        openSideBar,
        closeSideBar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
