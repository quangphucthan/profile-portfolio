import {createContext, useState, useEffect, useMemo, useContext} from 'react';
import PropTypes from 'prop-types';

export const mode = createContext();

export const PageMode = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
      });
    
      useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
    
      const value = useMemo(() => ({ theme, setTheme }), [theme]);

      return (
        <mode.Provider value={value}>
          {children}
        </mode.Provider>
      );
};

PageMode.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePageMode = () => {
    return useContext(mode);
};