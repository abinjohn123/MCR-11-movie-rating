import { createContext, useContext, useState } from 'react';
import { moviesData, LOCAL_STORAGE_KEYS } from './constants';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.MOVIES)) ?? moviesData
  );

  const setLocalStorageData = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.MOVIES, JSON.stringify(data));
    setMovies(data);
  };

  const contextValue = { movies, setMovies: setLocalStorageData };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
