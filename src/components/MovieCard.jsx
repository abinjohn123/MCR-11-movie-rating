const MovieCard = ({ movie }) => {
  const { id, title, summary, imageURL } = movie;

  return (
    <div className="movie-card">
      <div className="img-container">
        <img src={imageURL} alt={title} />
      </div>
      <div className="d-flex flex-column gap8 p16">
        <div className="title text-ellipsis">
          <h3>{title}</h3>
        </div>
        <p className="summary">{summary}</p>
      </div>
      <div className="d-flex-c-s p16">
        <button className="card-btn">Star</button>
        <button className="card-btn">Add to watch later</button>
      </div>
    </div>
  );
};

export default MovieCard;
