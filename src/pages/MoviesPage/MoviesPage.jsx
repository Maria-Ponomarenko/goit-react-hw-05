import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import SearchBar from "../../components/SearchBar/SearchBar";
import SearchMovieList from "../../components/SearchMovieList/SearchMovieList";
import getMovies from "../../apiService/movies-api";

export default function MoviesPage() {
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");

  useEffect(() => {
    async function findMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies("search/movie", title);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    findMovie();
  }, [title]);

  return (
    <div>
      <h1>movies</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <SearchBar />
      {movies.length > 0 && <SearchMovieList movies={movies} />}
    </div>
  );
}
