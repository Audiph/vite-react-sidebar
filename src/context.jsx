import { createContext, useContext, useState } from 'react';
import { links, social } from './data';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ links, socialLinks: social }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
