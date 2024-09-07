import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Navigation/Navigation.module.css";

export default function Navigation() {
  function createNavLinkClass(props) {
    return clsx(css.link, props.isActive && css.active);
  }

  return (
    <header>
      <ul>
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
