import CastListItem from "../CastListItem/CastListItem";
import css from "../CastList/CastList.module.css";

export default function CastList({ casts }) {
  if (casts.length > 0) {
    return (
      <ul className={css.list}>
        {casts.map((cast) => (
          <li key={cast.id}>
            <CastListItem cast={cast} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any information about the cast of this movie</p>;
  }
}
