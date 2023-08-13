import { useAppContext } from '../AppContext';

import MovieCard from './MovieCard';

const Home = () => {
  const { movies } = useAppContext();

  return (
    <div className="p32">
      <div className="d-flex-c-start gap24 f-wrap">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
