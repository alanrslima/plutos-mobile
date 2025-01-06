import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from '../styles';
import {ThemeProps} from '../types';

export type ThemeContextProps = ThemeProps & {
  handleTheme: () => void;
  isDarkMode: boolean;
};

export type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  function handleTheme() {
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <ThemeContext.Provider value={{...theme, handleTheme, isDarkMode}}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
