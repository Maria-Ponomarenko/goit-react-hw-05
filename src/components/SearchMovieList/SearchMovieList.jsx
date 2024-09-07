import { Link, useLocation } from "react-router-dom";

export default function SearchMovieList({ movies }) {
  const location = useLocation();

  if (movies.length > 0) {
    return (
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>We don't have any movies matching your request</p>;
  }
}
