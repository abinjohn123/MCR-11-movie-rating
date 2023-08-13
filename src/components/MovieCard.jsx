import { useNavigate } from 'react-router';
import { useAppContext } from '../AppContext';

const MovieCard = ({ movie }) => {
  const { id, title, summary, imageURL } = movie;
  const { starred, setStarred, watchLater, setWatchLater } = useAppContext();
  const navigate = useNavigate();

  const isMovieStarred = starred.some((starredId) => id === starredId);
  const isMovieInWatchLater = watchLater.some(
    (watchLaterId) => id === watchLaterId
  );

  const handleStarClick = () =>
    setStarred(
      isMovieStarred
        ? starred.filter((starredId) => starredId !== id)
        : [...starred, id]
    );

  const handleWatchLaterClick = () =>
    setWatchLater(
      isMovieInWatchLater
        ? watchLater.filter((watchLaterId) => watchLaterId !== id)
        : [...watchLater, id]
    );

  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${id}`)}>
      <div className="img-container">
        <img src={imageURL} alt={title} />
      </div>
      <div className="d-flex flex-column gap8 p16">
        <div className="title text-ellipsis">
          <h3>{title}</h3>
        </div>
        <p className="summary">{summary}</p>
      </div>
      <div className="d-flex-c-s p16" onClick={(e) => e.stopPropagation()}>
        <button className="card-btn" onClick={handleStarClick}>
          {isMovieStarred ? 'Starred' : 'Star'}
        </button>
        <button className="card-btn" onClick={handleWatchLaterClick}>
          {isMovieInWatchLater ? 'Remove from' : 'Add to'} watch later
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
