// Steps:

// 1: create a context using createContext
// 2: Wrap around Component tree
// 3: place the value that is suppossed to be passed down
// 4: Read the value of the context

import React, { createContext, useState, useEffect, useContext } from "react";

const Theme = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const values = {theme, setTheme}
  return <Theme.Provider value={values}>{children}</Theme.Provider>;
};

export const useTheme = () => useContext(Theme);