import { Link, useLocation } from "react-router-dom";
import css from "../MovieList/MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
