import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Page not found!</h1>
      <p>
        Please use this link to go <Link to="/">back home</Link>{" "}
      </p>
    </div>
  );
}
