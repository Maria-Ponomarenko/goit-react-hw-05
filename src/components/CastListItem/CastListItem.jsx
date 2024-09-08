import css from "../CastListItem/CastListItem.module.css";

export default function CastListItem({
  cast: { profile_path, name, character },
}) {
  return (
    <div className={css.wrapper}>
      <div className={css.imageBox}>
        {profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        ) : (
          <div className={css.iconWrap}>
            <span className={css.icon}>👤</span>
          </div>
        )}
      </div>
      <p>{name}</p>
      <p>{`Character: ${character}`}</p>
    </div>
  );
}
