import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ReviewsList from "../ReviewsList/ReviewsList";
import getMovies from "../../apiService/movies-api";

export default function MovieReviews() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function findReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await getMovies(`movie/${movieId}/reviews`);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    findReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {reviews && <ReviewsList reviews={reviews} />}
    </div>
  );
}
