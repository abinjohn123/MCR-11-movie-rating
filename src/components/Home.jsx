import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../AppContext';

import Filters from './Filters';
import MovieCard from './MovieCard';

const getParams = (urlObj) => {
  const obj = {};
  for (const [key, value] of urlObj.entries()) {
    obj[key] = value;
  }
  return obj;
};

const Home = () => {
  const { movies } = useAppContext();
  const [searchParams, _] = useSearchParams();
  const filterParams = getParams(searchParams);

  const getFilteredList = () => {
    const genreFilter = filterParams.genre ? filterParams.genre : 'all';
    const yearFilter = filterParams.year ?? 'any';
    const ratingFilter = filterParams.rating ?? 'any';

    return movies.filter((movie) => {
      let flag = true;

      if (
        genreFilter !== 'all' &&
        !movie.genre.join(' ').toLowerCase().includes(genreFilter)
      )
        flag = false;

      if (yearFilter !== 'any' && movie.year !== Number(yearFilter))
        flag = false;

      if (ratingFilter !== 'any' && movie.rating !== Number(ratingFilter))
        flag = false;

      return flag;
    });
  };

  return (
    <div className="p32">
      <Filters />
      <div className="d-flex-c-start gap24 f-wrap">
        {getFilteredList().length === 0 && (
          <div className="d-flex py64">
            <p className="my64">
              No matching movies found. Please try another filter.
            </p>
          </div>
        )}
        {getFilteredList().map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
