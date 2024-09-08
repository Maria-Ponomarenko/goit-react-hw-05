import { useSearchParams } from "react-router-dom";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.title.value.toLowerCase().trim();

    if (!value) return;

    searchParams.set("title", value);
    setSearchParams(searchParams);

    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="title"
        autoComplete="off"
        autoFocus
      />
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
}
