import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import CastList from "../CastList/CastList";
import getMovies from "../../apiService/movies-api";

export default function MovieCast() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function findCasts() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(`movie/${movieId}/credits`);
        setCasts(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    findCasts();
  }, [movieId]);

  return (
    <div>
      <h1>Cast</h1>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {casts && <CastList casts={casts} />}
    </div>
  );
}
