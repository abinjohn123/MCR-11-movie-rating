import { createContext, useContext, useState } from 'react';
import { moviesData, LOCAL_STORAGE_KEYS } from './constants';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.MOVIES)) ?? moviesData
  );
  const [watchLater, setWatchLater] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.WATCH_LATER)) ?? []
  );
  const [starred, setStarred] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.STARRED)) ?? []
  );

  const setLocalStorageMovies = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.MOVIES, JSON.stringify(data));
    setMovies(data);
  };
  const setLocalStorageWatchLater = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.WATCH_LATER, JSON.stringify(data));
    setWatchLater(data);
  };
  const setLocalStorageStarred = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.STARRED, JSON.stringify(data));
    setStarred(data);
  };

  const getSearchResults = () => {
    let searchResults = [...movies];
    const searchQuery = searchInput.trim().toLowerCase();
    if (searchQuery)
      searchResults = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchQuery) ||
          movie.director.toLowerCase().includes(searchQuery) ||
          movie.cast.join(' ').toLowerCase().includes(searchQuery)
      );

    return searchResults;
  };

  const contextValue = {
    searchInput,
    setSearchInput,
    movies: getSearchResults(),
    watchLater,
    starred,
    setMovies: setLocalStorageMovies,
    setWatchLater: setLocalStorageWatchLater,
    setStarred: setLocalStorageStarred,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
