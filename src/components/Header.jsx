import { NavLink } from 'react-router-dom';
import { useAppContext } from '../AppContext';

const Header = () => {
  const { searchInput, setSearchInput } = useAppContext();

  return (
    <div className="app-header d-flex-c-s gap24 p16">
      <h1>IMDB</h1>
      <input
        type="text"
        className="global-search p8"
        placeholder="Search movies by title, cast and director"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div className="d-flex gap8 app-nav">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/watch-later">Watch Later</NavLink>
        <NavLink to="/starred">Starred</NavLink>
      </div>
    </div>
  );
};

export default Header;
