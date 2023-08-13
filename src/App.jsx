import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import StarWatchLater from './components/StarWatchlater';
import { SUBPAGE_MAPPING } from './constants';
import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
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
      </Routes>
    </>
  );
}

export default App;
