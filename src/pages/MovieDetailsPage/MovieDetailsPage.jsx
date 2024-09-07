import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieInfo from "../../components/MovieInfo/MovieInfo";
import MovieDetailsNavigation from "../../components/MovieDetailsNavigation/MovieDetailsNavigation";
import getMovies from "../../apiService/movies-api";

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  console.log(backLinkRef);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function findMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(`movie/${movieId}`);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    findMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieInfo movie={movie} />}
      <MovieDetailsNavigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}
