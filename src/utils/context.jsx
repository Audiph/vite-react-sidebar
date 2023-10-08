import { createContext, useContext, useState } from 'react';
import { links, social } from '../data';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        links,
        socialLinks: social,
        openModal,
        setOpenModal,
        openSideBar,
        setOpenSideBar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
