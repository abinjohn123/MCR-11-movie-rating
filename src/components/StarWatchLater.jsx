import { useAppContext } from '../AppContext';

import MovieCard from './MovieCard';
import { SUBPAGE_MAPPING } from '../constants';

const StarWatchLater = ({ type }) => {
  const { movies, starred, watchLater } = useAppContext();
  let movieList = [];
  const title =
    type === SUBPAGE_MAPPING.STARRED.type
      ? SUBPAGE_MAPPING.STARRED.title
      : SUBPAGE_MAPPING.WATCH_LATER.title;

  if (type === SUBPAGE_MAPPING.STARRED.type)
    movieList = movies.filter(({ id }) => starred.includes(id));
  else if (type === SUBPAGE_MAPPING.WATCH_LATER.type)
    movieList = movies.filter(({ id }) => watchLater.includes(id));

  return (
    <div className="p32">
      <h3 className="mb24">{title}</h3>
      {movieList.length === 0 && (
        <p className="py64">No movies found in this list.</p>
      )}
      <div className="d-flex-c-start gap24 f-wrap">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default StarWatchLater;
