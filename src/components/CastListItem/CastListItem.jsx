export default function CastListItem({
  cast: { profile_path, name, character },
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
      <p>{name}</p>
      <p>{`Character: ${character}`}</p>
    </div>
  );
}
