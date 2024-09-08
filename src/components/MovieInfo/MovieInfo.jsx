import css from "../MovieInfo/MovieInfo.module.css";

export default function MovieInfo({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) {
  const year = release_date.slice(0, 4);
  const score = parseFloat(vote_average).toFixed(1);

  return (
    <div className={css.movieWrapper}>
      <div className={css.imageBox}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>

      <div>
        <h1>{`${title} (${year})`}</h1>
        <p>{`User Score: ${score}`}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genres.map((genre) => genre.name).join(",")}</p>
      </div>
    </div>
  );
}
