import { useSearchParams } from 'react-router-dom';
import { GENRE_FILTER_MAPPING, MOVIE_YEAR_FILTER } from '../constants';

const getParams = (urlObj) => {
  const obj = {};

  for (const [key, value] of urlObj.entries()) {
    obj[key] = value;
  }

  return obj;
};

const Filters = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { genre, year, rating } = getParams(searchParams);

  return (
    <div className="filters d-flex-c-s mb32">
      <h2>Movies</h2>
      <select
        className="select-input cur-p p4"
        name="genre"
        id="genre"
        onChange={(e) => {
          setSearchParams({
            ...getParams(searchParams),
            genre: e.target.value,
          });
        }}
        defaultValue={genre ? genre : 'all'}
      >
        {GENRE_FILTER_MAPPING.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>

      <select
        className="select-input cur-p p4"
        name="year"
        id="year"
        onChange={(e) => {
          setSearchParams({
            ...getParams(searchParams),
            year: e.target.value,
          });
        }}
        defaultValue={year ? Number(year) : 'any'}
      >
        <option value="any">Any Year</option>
        {Array.from(Array(MOVIE_YEAR_FILTER.END - MOVIE_YEAR_FILTER.START)).map(
          (_, index) => (
            <option value={MOVIE_YEAR_FILTER.START + index} key={index}>
              {MOVIE_YEAR_FILTER.START + index}
            </option>
          )
        )}
      </select>

      <select
        className="select-input cur-p p4"
        name="rating"
        id="rating"
        onChange={(e) => {
          setSearchParams({
            ...getParams(searchParams),
            rating: e.target.value,
          });
        }}
        defaultValue={rating ? Number(rating) : 'any'}
      >
        <option value="any">Any Rating</option>
        {Array.from(Array(10)).map((_, index) => (
          <option value={index + 1} key={index}>
            {index + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
