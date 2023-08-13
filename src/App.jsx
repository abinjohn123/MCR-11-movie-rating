import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { useAppContext } from './AppContext';
import Header from './components/Header';
import Home from './components/Home';
import StarWatchLater from './components/StarWatchlater';
import SingleMovie from './components/SingleMovie';
import { SUBPAGE_MAPPING } from './constants';
import './styles/App.scss';

function App() {
  const location = useLocation();
  const { setSearchInput } = useAppContext();

  useEffect(() => setSearchInput(''), [location.pathname]);
  return (
    <>
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/starred"
            element={<StarWatchLater type={SUBPAGE_MAPPING.STARRED.type} />}
          />
          <Route
            path="/watch-later"
            element={<StarWatchLater type={SUBPAGE_MAPPING.WATCH_LATER.type} />}
          />
          <Route path="/movies/:movieId" element={<SingleMovie />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
