import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  function createNavLinkClass(props) {
    return clsx(css.link, props.isActive && css.active);
  }

  return (
    <header className={css.header}>
      <ul className={css.list}>
        <li>
          <NavLink to="/" className={createNavLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={createNavLinkClass}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
