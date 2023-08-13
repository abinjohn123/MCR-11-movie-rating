import { useParams } from 'react-router';
import { useAppContext } from '../AppContext';

const SingleMovie = () => {
  const { movieId } = useParams();
  const { movies, starred, setStarred, watchLater, setWatchLater } =
    useAppContext();
  const movie = movies.find(({ id }) => id === movieId);

  const isMovieStarred = starred.some((starredId) => movieId === starredId);
  const isMovieInWatchLater = watchLater.some(
    (watchLaterId) => movieId === watchLaterId
  );

  const handleStarClick = () =>
    setStarred(
      isMovieStarred
        ? starred.filter((starredId) => starredId !== movieId)
        : [...starred, movieId]
    );

  const handleWatchLaterClick = () =>
    setWatchLater(
      isMovieInWatchLater
        ? watchLater.filter((watchLaterId) => watchLaterId !== movieId)
        : [...watchLater, movieId]
    );

  const {
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = movie;

  return (
    <div className="p32">
      <div className="single-movie-container p16">
        <div className="img-container">
          <img src={imageURL} alt={title} />
        </div>
        <div className="details-container d-flex-c-start flex-column gap16">
          <div>
            <h1 className="title mb4">{title}</h1>
            <p className="summary">{summary}</p>
          </div>
          <p>Year: {year}</p>
          <p>Genre: {genre.join(', ')}</p>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <p>Cast: {cast.join(', ')}</p>
          <div className="btn-container" onClick={(e) => e.stopPropagation()}>
            <button className="card-btn" onClick={handleStarClick}>
              {isMovieStarred ? 'Starred' : 'Star'}
            </button>
            <button className="card-btn" onClick={handleWatchLaterClick}>
              {isMovieInWatchLater ? 'Remove from' : 'Add to'} watch later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
