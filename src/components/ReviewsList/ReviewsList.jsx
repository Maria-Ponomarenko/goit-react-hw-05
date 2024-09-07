export default function ReviewsList({ reviews }) {
  if (reviews.length > 0) {
    return (
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>{`Author: ${author}`}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    return <p>We don't have any reviews for this movie.</p>;
  }
}
