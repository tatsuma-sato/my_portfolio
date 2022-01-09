import React, { useState, useContext, useEffect } from "react";
// make sure to use https

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue')
  
  return (
    <AppContext.Provider value={theme}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
